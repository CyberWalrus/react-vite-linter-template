import { readdirSync, statSync } from 'fs';
import { extname, join } from 'path';

export const getFiles = (value: string) => {
    const pngFiles: string[] = [];

    const readDirRecursive = (directory: string) => {
        const fullDirectoryPath = directory;

        const filesAndDirs = readdirSync(fullDirectoryPath);

        for (const name of filesAndDirs) {
            const fullPath = join(fullDirectoryPath, name);

            const stat = statSync(fullPath);

            if (stat.isFile() && extname(name) === '.png') {
                pngFiles.push(fullPath);
            } else if (stat.isDirectory()) {
                readDirRecursive(join(directory, name));
            }
        }
    };

    readDirRecursive(value);

    return pngFiles;
};
