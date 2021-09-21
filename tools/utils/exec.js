'use strict';
exports.__esModule = true;
exports.asyncExec = void 0;
var util_1 = require('util');
var child_process_1 = require('child_process');
exports.asyncExec = util_1.promisify(child_process_1.exec);
