function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // you typically don't want this kinda logic at run time if you can help it
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// TS allows you to declare type ahead of time, telling it what to expect
let number1: number; 
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);