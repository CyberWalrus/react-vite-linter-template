import type { Rule } from 'eslint';
import * as path from 'path';

function parseFilename(filename: string): {
    base: string;
    dir: string;
    ext: string;
    name: string;
} {
    const ext = path.extname(filename);

    return {
        base: path.basename(filename),
        dir: path.dirname(filename),
        ext,
        name: path.basename(filename, ext),
    };
}

const rule: Rule.RuleModule = {
    create(context) {
        const options = (context.options[0] || {}) as { pattern?: string };
        const pattern = new RegExp(options.pattern || '^[a-z0-9-.]+$');

        const { filename } = context;

        if (filename === '<input>') {
            return {};
        }

        const { name } = parseFilename(filename);

        if (!pattern.test(name)) {
            context.report({
                data: {
                    filename: name,
                    pattern: pattern.toString(),
                },
                loc: { end: { column: 0, line: 1 }, start: { column: 0, line: 1 } },
                messageId: 'notMatching',
            });
        }

        return {};
    },

    meta: {
        docs: {
            category: 'Stylistic Issues',
            description: 'Checks that a file name follows the given convention.',
            recommended: false,
        },
        messages: {
            notMatching: "File name '{{filename}}' does not match pattern '{{pattern}}'.",
        },
        schema: [
            {
                additionalProperties: false,
                properties: {
                    pattern: { type: 'string' },
                },
                type: 'object',
            },
        ],
        type: 'suggestion',
    },
};

export default rule;
