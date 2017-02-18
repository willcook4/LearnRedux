var redux = require('redux');

console.log('Starting redux example');

// Pure Function
// - returns the same result given the same inputs.
// - No side effects, no global variables, nor update any variables outside of itself
// - no async requests or promises
// - Doesn't update the values input into the function.
function add(a, b) {
  return a + b;
}

// Not Pure
// - variable 'a' could change
var a = 3;
function add(a, b) {
  return a + b;
}

var result;
function add(a, b) {
  reasult = a+b;
  return result;
}

function add(a, b) {
  return a +b + new Date().getSeconds();
} // Doesn't return teh same input


function changeProp(obj) {
  obj.name = 'Jen'; // This makes it unpure as the object inputted gets changed.
  return obj;
}

// New ES6 workaround !! Returns a new object with updated info.
function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen'
  };
  // obj.name = 'Jen'; // This makes it unpure as the object inputted gets changed.
  // return obj; // Returns the changed obj unpure.
}
var startingValue = {
  name: 'Andrew',
  age: 25
};
var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);