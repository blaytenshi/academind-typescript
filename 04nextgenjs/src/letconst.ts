// This is a JS constant, can't be changed
const sup = 'sup bitches';
// TS will give you an error
// JS and Browser will throw an error, won't even log on the next line
// sup = 'sup ninjas';
console.log(sup);

// This is the new standard for JS variables, can be changed
let hello = 'General Kenobi';

// var and let basically does the same thing in terms of scoping
var hi = 'There!'; // globally declared

function sayHi() {
  var hi = 'Bye!'; // scope declared hi
  console.log(hi); // will log 'Bye!' not 'There!'
}

sayHi();

console.log(hi);

// there is a difference with let in that let only exists in block scope which
// isn't a huge deal for functions but will be different in control statements
// like ifs and whiles:
// Note: you'll need to copy this chunk into the browser console because
// TS will refuse to compile it
if (hi === 'There!') {
  var isOld = true; // globally declared!
}

// console.log(isOld); // should be undefined but will log true

// but if you use let then isOld will only be valid between the curly braces and
// its children