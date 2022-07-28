// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

 'use strict'

 var gentlyCopy = require('gently-copy')
 
 var filesToCopy = ['build/compiled1.js', 'build/compiled2.js', 'build/compiled3.js']
 
 // User's local directory
 var userPath = process.env.INIT_CWD
 
 console.log(userPath);

 // Moving files to user's local directory
 gentlyCopy(filesToCopy, `${userPath}/src/`)
