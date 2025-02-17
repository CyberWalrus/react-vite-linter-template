import type { Rule } from 'eslint';
import type { Node } from 'estree';

export const noBrowserStorage: Rule.RuleModule = {
    create(context) {
        return {
            Identifier(node: Node) {
                if (node.type === 'Identifier') {
                    const identifier = node;

                    if (/^(session|local)Storage$/.test(identifier.name)) {
                        context.report({
                            data: { name: identifier.name },
                            messageId: 'unexpectedUse',
                            node,
                        });
                    }
                }
            },
        };
    },
    meta: {
        docs: {
            description: 'Disables the use of sessionStorage and localStorage',
            recommended: false,
        },
        messages: {
            unexpectedUse: 'Unexpected use of {{name}}.',
        },
        schema: [],
        type: 'problem',
    },
};
