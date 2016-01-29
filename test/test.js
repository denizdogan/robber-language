require('core-js/fn/object/entries');

import assert from 'assert';
import { encode, decode } from '../src/index';

var ENTRIES = Object.entries({
  'lorem ipsum': 'lolororemom ipopsosumom',
  'dolor sit amet': 'dodololoror sositot amometot'
});

describe('robber-language', function() {
  it('should encode correctly', function() {
    ENTRIES.forEach(function([input, output]) {
      assert.equal(encode(input), output);
    });
  });

  it('should decode correctly', function() {
    ENTRIES.forEach(function([input, output]) {
      assert.equal(decode(output), input);
    });
  });

  it('should return the input string after encoding then decoding', function() {
    var exec = input => decode(encode(input));
    ENTRIES.forEach(function([input, _output]) {
      assert.equal(exec(input), input);
    })
  });

  it('should return the input string after decoding then encoding', function() {
    var exec = input => encode(decode(input));
    ENTRIES.forEach(function([_input, output]) {
      assert.equal(exec(output), output);
    });
  });
});
