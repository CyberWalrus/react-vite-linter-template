import type { Rule, Scope } from 'eslint';

import { createFn, isReturnValueJSXOrNull } from './helpers';

function isRenderMethodInReactCC(scope: Scope.Scope): boolean {
    const block = scope.block as any;

    if (block && block.parent) {
        const { type, kind, key } = block.parent;

        return (
            type === 'MethodDefinition' &&
            kind === 'method' &&
            key &&
            key.name === 'render' &&
            isReturnValueJSXOrNull(scope)
        );
    }

    return false;
}

function reportReference(context: Rule.RuleContext): (reference: Scope.Reference) => void {
    return (reference: Scope.Reference): void => {
        const node = reference.identifier;
        const { name, parent } = node;
        // Для случаев, когда используется typeof или ссылки на TS типы – ничего не делаем.
        if (
            (parent && parent.type === 'UnaryExpression' && parent.operator === 'typeof') ||
            (parent && (parent.type === 'TSTypeReference' || parent.type === 'TSInterfaceHeritage'))
        ) {
            return;
        }

        if (isRenderMethodInReactCC(reference.from)) {
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
            description: 'Disallow use of DOM globals in render() method of a React class-component',
            recommended: true,
        },
        messages: {
            defaultMessage:
                "Use of DOM global '{{name}}' is forbidden in render(), consider moving this to componentDidMount()",
        },
        type: 'problem',
    },
};

export default rule;
