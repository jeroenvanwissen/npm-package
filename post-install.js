// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */
import { promisify } from 'util';
import { copyFile } from 'fs';
import { join } from 'path';

const copyFilePromise = promisify(copyFile);

const copyFiles = (srcDir, destDir, files) => {
    return Promise.all(files.map((file) => {
        return copyFilePromise(join(srcDir, file), join(destDir, file));
    }));
};

copyFiles(
    'build',
    `${process.env.INIT_CWD}/src/`,
    [
        'compiled1.js',
        'compiled2.js',
        'compiled3.js'
    ]
)
.then(() => {
    console.info('sds');
    console.error('Files copied to project...');
})
.catch((error) => {
    console.error(error);
});
