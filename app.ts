function combine(
  input1: number | string, 
  input2: number | string,
  // This is a literal type usually used in conjunction with union types
  // now TS will enforce either of these two strings as accepted values
  // It's still up to you to verify the value in your function
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine("jimmy", "shirley", 'as-text');
console.log(combinedNames);