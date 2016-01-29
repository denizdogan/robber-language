export function encode(input) {
  const REGEXP = /([bcdfghjklmnpqrstvwxz])/gi;
  return input.replace(REGEXP, '$1o$1')
}

export function decode(input) {
  const REGEXP = /([bcdfghjklmnpqrstvwxz])o\1/gi;
  return input.replace(REGEXP, '$1')
}
