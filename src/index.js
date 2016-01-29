export function encode(input) {
  const REGEXP = /([bcdfghjklmnpqrstvxz])/gi;
  return input.replace(REGEXP, '$1o$1')
}

export function decode(input) {
  const REGEXP = /([bcdfghjklmnpqrstvxz])o\1/gi;
  return input.replace(REGEXP, '$1')
}
