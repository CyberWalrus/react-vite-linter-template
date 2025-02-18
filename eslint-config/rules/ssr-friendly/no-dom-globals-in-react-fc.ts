/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { Rule, Scope } from 'eslint';
import type { Identifier } from 'estree';

import { createFn, isReturnValueJSXOrNull } from './helpers';

function isReactFunction(node: Identifier, functionName: string): boolean {
    return (
        node.name === functionName ||
        (node.type === 'MemberExpression' && node.object.name === 'React' && node.property.name === functionName)
    );
}

function isFirstLetterCapitalized(name: string): boolean {
    return Boolean(name) && name[0] === name[0].toUpperCase();
}

function isReactFunctionComponent(scope: Scope.Scope): boolean {
    const { block } = scope;
    switch (block.type) {
        case 'FunctionDeclaration':
            return Boolean(block.id) && isFirstLetterCapitalized(block.id.name) && isReturnValueJSXOrNull(scope);
        case 'FunctionExpression':
        case 'ArrowFunctionExpression':
            if (block.parent && block.parent.type === 'VariableDeclarator') {
                return (
                    Boolean(block.parent.id) &&
                    isFirstLetterCapitalized(block.parent.id.name as string) &&
                    isReturnValueJSXOrNull(scope)
                );
            }
            if (
                block.parent &&
                block.parent.type === 'CallExpression' &&
                isReactFunction(block.parent.callee, 'forwardRef')
            ) {
                return true;
            }
    }

    return false;
}

function reportReference(context: Rule.RuleContext): (reference: Scope.Reference) => void {
    return (reference: Scope.Reference): void => {
        const node = reference.identifier;
        const { name, parent } = node;

        if (
            (parent && parent.type === 'UnaryExpression' && parent.operator === 'typeof') ||
            (parent && (parent.type === 'TSTypeReference' || parent.type === 'TSInterfaceHeritage'))
        ) {
            return;
        }

        if (isReactFunctionComponent(reference.from)) {
            context.report({
                data: { name },
                messageId: 'defaultMessage',
                node,
            });
        }
    };
}

const rule: Rule.RuleModule = {
    create: createFn(reportReference),
    meta: {
        docs: {
            description: 'Disallow use of DOM globals in the render-cycle of a React functional component',
            recommended: true,
        },
        messages: {
            defaultMessage:
                "Use of DOM global '{{name}}' is forbidden in the render-cycle of a React FC, consider moving this inside useEffect()",
        },
        type: 'problem',
    },
};

export default rule;
