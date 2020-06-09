// unknown types
// There is another type in TS called unknown. It is used for scenarios for when
// we don't know what type is going to be provided. If you think to say an
// HTML InputField, the value that comes in could be a number, a boolean or a
// string. Depending on the way you build your component you may not know what
// the value type will be. So you can set this to unknown.
let userInput: unknown;

// you can actually assign any value to unknown
userInput = 5;
userInput = "Jimmeh";

// so how is it different to the type of any?
// it's different in the way that it's slightly more restrictive than any.
// you cannot directly assign a variable that is typed value to another variable
// with a fixed type without FIRST checking it:

// userName has string as the fixed type
let userName: string 
// userName = userInput; // should be "Jimmeh" but TS won't allow it! Error!

// so we wrap it in an if statement and TS will look for this!
if (typeof userInput === 'string') {
  userName = userInput; // now it will allow you to assign it!
}