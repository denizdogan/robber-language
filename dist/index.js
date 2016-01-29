'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encode = encode;
exports.decode = decode;
function encode(input) {
  var REGEXP = /([bcdfghjklmnpqrstvwxz])/gi;
  return input.replace(REGEXP, '$1o$1');
}

function decode(input) {
  var REGEXP = /([bcdfghjklmnpqrstvwxz])o\1/gi;
  return input.replace(REGEXP, '$1');
}