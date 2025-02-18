import type { Rule, Scope } from 'eslint';
import type { Literal, Node } from 'estree';
import { browser as browserGlobals, node as nodeGlobals } from 'globals';

function isDOMGlobalName(name: string): boolean {
    return name in (browserGlobals ?? {}) && !(name in (nodeGlobals ?? {}));
}

function isJSXElementOrFragment(argumentType: string): boolean {
    return argumentType === 'JSXElement' || argumentType === 'JSXFragment';
}

function isReturnValueNull(argument: Node): boolean {
    return argument.type === 'Literal' && (argument as Literal).value === null;
}

export function isReturnValueJSXOrNull(scope: Scope.Scope): boolean {
    const { block } = scope;
    if (block && block.body && Array.isArray(block.body)) {
        return (
            scope.type === 'function' &&
            Boolean(
                block.body.find((e: any) => {
                    if (!(e && e.type === 'ReturnStatement' && e.argument)) {
                        return false;
                    }
                    if (isJSXElementOrFragment(e.argument.type) || isReturnValueNull(e.argument)) {
                        return true;
                    }

                    return (
                        e.argument.type === 'ConditionalExpression' &&
                        (isJSXElementOrFragment(e.argument.consequent.type) ||
                            isReturnValueNull(e.argument.consequent)) &&
                        (isJSXElementOrFragment(e.argument.alternate.type) || isReturnValueNull(e.argument.alternate))
                    );
                }),
            )
        );
    }

    return false;
}

export function createFn(reportReference: (context: Rule.RuleContext) => (reference: Scope.Reference) => void) {
    return function create(context: Rule.RuleContext) {
        return {
            Program(programNode: Node): void {
                const { sourceCode } = context;
                const { scopeManager } = sourceCode;
                const globalScope = scopeManager.acquire(programNode);
                if (!globalScope) {
                    return;
                }

                globalScope.variables.forEach((variable: Scope.Variable) => {
                    if (!variable.defs.length && isDOMGlobalName(variable.name)) {
                        variable.references.forEach(reportReference(context));
                    }
                });

                globalScope.through.forEach((reference: Scope.Reference) => {
                    if (isDOMGlobalName(reference.identifier.name)) {
                        reportReference(context)(reference);
                    }
                });
            },
        };
    };
}
