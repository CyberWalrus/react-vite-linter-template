import type { Rule } from 'eslint';
import type { ImportDeclaration } from 'estree';
import path from 'path';

function resolveRelativePath(alias: string, aliasPath: string, currentFilePath: string, importSource: string): string {
    const fullPath = path.join(aliasPath, importSource.slice(alias.length)); // Абсолютный путь импорта
    const relativePath = path.relative(path.dirname(currentFilePath), fullPath); // Релятивный путь

    return relativePath.startsWith('.') ? relativePath : `./${relativePath}`; // Исправление формата
}

type Options = {
    aliases?: Record<string, string>;
};

export const aliasToRelative: Rule.RuleModule = {
    create(context) {
        const options = (context.options[0] as Options) || ({} as Options);
        const aliases: Record<string, string> = options.aliases || {};

        return {
            ImportDeclaration(node: ImportDeclaration & Rule.NodeParentExtension) {
                if (typeof node.source.value !== 'string') {
                    return;
                }

                const importSource = node.source.value;

                for (const [alias, aliasPath] of Object.entries(aliases)) {
                    if (importSource.startsWith(alias)) {
                        const { filename } = context;
                        const relativePath = resolveRelativePath(alias, aliasPath, filename, importSource);

                        if (importSource !== relativePath) {
                            context.report({
                                fix(fixer) {
                                    return fixer.replaceText(node.source, `'${relativePath}'`);
                                },
                                message: `Import '${importSource}' can be replaced with relative '${relativePath}'`,
                                node,
                            });
                        }

                        break;
                    }
                }
            },
        };
    },
    meta: {
        docs: {
            category: 'Best Practices',
            description: 'Replaces aliases or specified paths with relative imports',
            recommended: false,
        },
        fixable: 'code',
        schema: [
            {
                additionalProperties: false,
                properties: {
                    aliases: {
                        patternProperties: {
                            '.*': { type: 'string' },
                        },
                        type: 'object',
                    },
                },
                type: 'object',
            },
        ],
        type: 'suggestion',
    },
};
