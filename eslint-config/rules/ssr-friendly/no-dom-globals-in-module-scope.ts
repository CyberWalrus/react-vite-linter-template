import type { Rule, Scope } from 'eslint';

import { createFn } from './helpers';

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

        if (reference.from.type === 'module' || (reference.from.upper && reference.from.upper.type === 'global')) {
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
            description: 'Disallow use of DOM globals in class constructors',
            recommended: true,
        },
        messages: {
            defaultMessage:
                "Use of DOM global '{{name}}' is forbidden in class constructors, consider moving this to componentDidMount() or equivalent for non React components",
        },
        type: 'problem',
    },
};

export default rule;
