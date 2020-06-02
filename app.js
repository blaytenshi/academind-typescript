// return types of functions.
// As we know functions can return stuff. These functions can also have a type
// that is defined by typescript.
// Here this function has a return type implicitly set as number.
function add(n1, n2) {
    return n1 + n2;
}
// explitictly setting return type
function addWithReturnType(n1, n2) {
    return n1 + n2;
}
// if we expcitly set a return type and the type doesn't match then TS will
// throw an error
// function subtract(n1: number, n2: number): string {
//   return n1 - n2; // Error!
// }
// void return types
// let's say we print the result of addWithReturnType:
function printResult(n) {
    console.log('Result: ' + n);
}
// Even though the function prints something to the console, the return 
// type as seen by TS is actually void. see it by hovering over 
// 'printResult' in VSCode
printResult(addWithReturnType(5, 12));
// this is despite the fact that running a function with no return values
// actually returns 'undefined' in javascript. See in Chrome's console after we
// run printResult() with the add() function and log what it returns
console.log(printResult(5)); // 
