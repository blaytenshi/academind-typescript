// Function types
// back to our original add function
function add(n1, n2) {
    return n1 + n2;
}
// takes two number types and returns a number type
// now in normal JS we can do this, assign the function to a variable and call it
var combine = add;
console.log(combine(5, 11));
