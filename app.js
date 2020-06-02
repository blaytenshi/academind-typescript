function combine(input1, input2, 
// This is a literal type usually used in conjunction with union types
// now TS will enforce either of these two strings as accepted values
// It's still up to you to verify the value in your function
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine("jimmy", "shirley", 'as-text');
console.log(combinedNames);
