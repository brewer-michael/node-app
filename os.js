//node wraps code in a module wrapper function: ex (function (exports, require, module, __filename, __dirname)) {})

const logger = require('./logger.js');

console.log(logger);

logger.log('message');

const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('Total Memory: ' + totalMem);

//Template String
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);
