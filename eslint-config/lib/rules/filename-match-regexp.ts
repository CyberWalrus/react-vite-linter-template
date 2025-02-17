import type { Rule } from 'eslint';
import { basename, dirname, extname } from 'path';

function parseFilename(filename: string): {
    base: string;
    dir: string;
    ext: string;
    name: string;
} {
    const ext = extname(filename);

    return {
        base: basename(filename),
        dir: dirname(filename),
        ext,
        name: basename(filename, ext),
    };
}

export const filenameMatchRegexp: Rule.RuleModule = {
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
