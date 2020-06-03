// callback functions as parameters
// you declare the function type exactly as you would for a normal function!
// the parameter that the callback function accepts is the result which is a
// number type and because the actual function doesn't return anything, the 
// return type is void!
function addWithCallback(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  // don't need to redeclare the types here because it's already declared up top
  cb(result);
}

// now here you can't add a second parameter in the callback function without
// updating the parameter types in list of parameters within addWithCallback()
// function.
addWithCallback(10, 20, function (result) {
  console.log(result); // should still log 30
})