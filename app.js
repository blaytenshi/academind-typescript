// callback functions as parameters
// you declare the function type exactly as you would for a normal function!
// the parameter that the callback function accepts is the result which is a
// number type and because the actual function doesn't return anything, the 
// return type is void!
function addWithCallback(n1, n2, cb) {
    var result = n1 + n2;
    // don't need to redeclare the types here because it's already declared up top
    cb(result);
}
addWithCallback(10, 20, function (result) {
    console.log(result); // should still log 30
});
