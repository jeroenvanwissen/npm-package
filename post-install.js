// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */
const util = require('util');
const fs   = require('fs');
const path = require('path');

const copyFilePromise = util.promisify(fs.copFile);

const copyFiles = (srcDir, destDir, files) => {
    return Promise.all(files.map((file) => {
        return copyFilePromise(path.join(srcDir, file), path.join(destDir, file));
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
    console.log('Files copied to project...');
})
.catch((error) => {
    console.error(error);
});
