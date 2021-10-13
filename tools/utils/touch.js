'use strict';
exports.__esModule = true;
exports.touch = void 0;
var fs_1 = require('fs');
var touch = function (path) {
  return new Promise(function (resolve, reject) {
    var time = new Date();
    fs_1.utimes(path, time, time, function (err) {
      if (err) {
        return fs_1.open(path, 'w', function (err, fd) {
          if (err) {
            return reject(err);
          }
          fs_1.close(fd, function (err) {
            return err ? reject(err) : resolve(fd);
          });
        });
      }
      resolve();
    });
  });
};
exports.touch = touch;
