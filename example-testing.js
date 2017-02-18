// From jsbin.com, using https://github.com/mjackson/expect asssertions library.

console.log('Starting tests!');

function add (a,b) {
  return a+b;
}

expect(add(3,5)).toBe(8);
expect(add(-3,2)).toBeA('number');

function capitalizeWord (word) {
  if(!word || typeof word !== 'string') {
    word = '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}
// Given apple, expect Apple.
expect(capitalizeWord('apple')).toBe('Apple');
// Given apple expect a string to be returned.
expect(capitalizeWord('apple')).toBeA('string');
// Given nothing expect ''.
expect(capitalizeWord()).toBe('');

console.log('All tests have passed');

