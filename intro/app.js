// never return type
// let's say we have a function that generates error objects and throws them
// the function doesn't return void or undefined. It actually never returns
// anything, hence 'never'.
function generateError(message, code) {
    throw { message: message, code: code };
}
// in fact, if we call the function and set the assigned result to a variable
// and then try to log the variable, we actually get nothing:
var result = generateError('An error occured!', 500);
console.log('result', result);
