// below is a fairly standard js function
const add = function (a: number, b: number) {
    return a + b;
}

// below is an updated version of the same fuction but in arrow function format
const tsAdd = (a: number, b: number) => {
    return a + b;
}

// you can omit the {} if you only have one line of code to execute and return
// otherwise you need the curly braces
const tsAddOneLine = (a: number, b: number) => a + b;

// now lets say we have a function that just console logs written in js
// we can actually remove the () surrounding the parameters being passed into
// the function when we only have one param being passed in:
const printOutput = output => console.log(output);

// the above ts will complain because there's no type for output. We can't 
// directly add the type to output (say string or both string or number) so we 
// have to surround it with () and add the typing. lets say it takes number 
// and string:
const tsPrintOutput = (output: number | string) => console.log(output);
// now ts is happy

// however it's still possible to put the typing in!
// do you see what we did below? we've moved the type information to the 
// variable that the function is assigned! newTsPringOutput now has a type
// of a function that accepts an output variable that supports types number and
// string and returns void (because we just console log)
// have a careful look at it carefully to get used to the syntax!
const newTsPrintOutput: (output: number | string) => void = output => console.log(output);
//    ^fn Name          ^fn type                          ^assignment of the function itself!