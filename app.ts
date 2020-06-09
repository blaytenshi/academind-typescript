// never return type
// let's say we have a function that generates error objects and throws them
// the function doesn't return void or undefined. It actually never returns
// anything, hence 'never'.
function generateError(message: string, code: number): never {
  throw { message, code }
}

// in fact, if we call the function and set the assigned result to a variable
// and then try to log the variable, we actually get nothing because the code
// actually crashes. It won't even reach the console log.
const errorResult = generateError('An error occured!', 500);
console.log('result', errorResult);

// never is a newer type not present in older versions of TS. Typically TS will 
// assume void as the type. Using never is considered cleaner.

// note that infinite loop functions (eg, when creating a program runner) can
// also have the 'never' return type