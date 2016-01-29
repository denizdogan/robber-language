require('core-js/fn/object/entries');

import assert from 'assert';
import { encode, decode } from '../src/index';

const ENTRIES = Object.entries({
  ' \t\n': ' \t\n',
  'lorem ipsum': 'lolororemom ipopsosumom',
  'dolor sit amet': 'dodololoror sositot amometot',
  'aoeuiy': 'aoeuiy',
  'Badabing Bada Boom': 'BoBadodabobinongog BoBadoda BoBoomom',
  'bcdfghjklmnpqrstvwxz':
    'bobcocdodfofgoghohjojkoklolmomnonpopqoqrorsostotvovwowxoxzoz',
  'BCDFGHJKLMNPQRSTVWXZ':
    'BoBCoCDoDFoFGoGHoHJoJKoKLoLMoMNoNPoPQoQRoRSoSToTVoVWoWXoXZoZ',
  'No, thanks!': 'NoNo, tothohanonkoksos!'
});

describe('robber-language', () => {
  it('should encode correctly', () => {
    ENTRIES.forEach(([input, output]) => {
      assert.equal(encode(input), output);
    });
  });

  it('should decode correctly', () => {
    ENTRIES.forEach(([input, output]) => {
      assert.equal(decode(output), input);
    });
  });

  it('should return the input string after encoding then decoding', () => {
    var exec = input => decode(encode(input));
    ENTRIES.forEach(([input, _output]) => {
      assert.equal(exec(input), input);
    })
  });

  it('should return the input string after decoding then encoding', () => {
    var exec = input => encode(decode(input));
    ENTRIES.forEach(([_input, output]) => {
      assert.equal(exec(output), output);
    });
  });
});
