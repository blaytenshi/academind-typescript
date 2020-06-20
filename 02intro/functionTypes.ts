// Function types
// back to our original add function
function add(n1: number, n2: number): number {
  return n1 + n2;
}
// takes two number types and returns a number type

// now in normal JS we can do this, assign the function to a variable and call it
// const combine = add;
// console.log(combine(5, 11)); // should log 16

// but if we all of a sudden assign the combine varible to a value that's not a
// function, things will break because it's supposed to be a function!

// combine = 5;
// console.log(combine(5, 11)); // error! You can't invoke a value of 5!

// How do we declare a type of Function? Well, you can actually add the keyword
// Function to the end of the combine variable resulting in:

// const combine: Function = add

// This tells TS to expect a function, ANY function to be the type of value
// to be passed in.

// You can actually be even more specific with the following syntax!
// Here instead of staying it's just a function, we're indicating to TS (with
// what looks like an arrow function) the number of parameters the function
// accepts (2; a and b), their respective types (both numbers) and the return
// type after the arrow (=>) also a number.
// Now, even if we assign the a function to the combine variable, TS will check
// to make sure that the parameters and return type of the function matches.
const combine: (a: number, b:number) => number = add;