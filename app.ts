// callback functions as parameters
// back to the same add function... let's give it a callback function!
function add(n1: number, n2: number, cb) {
  const result = n1 + n2;
  cb(result);
}

// now when we call the function, we want to pass in a callback function that
// will console.log() the result.
add(10, 20, function (result) {
  console.log(result); // should log 30
})
// but how do we declare the a function type for this function?!