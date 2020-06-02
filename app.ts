const person: { 
  // here we're providing the variable with a Type. 
  // This to describe what the properties the object should contain and what
  // types of values should be in the said properties.
  name: string; 
  age: number;
  // arrays can have hold specific types or mixed types. Here's a string array.
  hobbies: string[]
} = {
  name: "Jimmy",
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

// you can also seperately define variables of arrays and give them types
let favouriteActivities: string[];
// will throw an error because it's not an array
// favouriteActivities = "sports"; 
// will also throw an array because it's a mixed type
// favouriteActivities = ["Sports", 1]

// this allows an array of mixed types
let anyActivities: any[];
anyActivities = ['Sports', 1]

console.log(person.name);

for (const hobby of person.hobbies) {
  // here toUpperCase() doesn't throw an error because TS correctly identifies
  // that hobbies is a string array and thus will also do autocomplete for you
  console.log(hobby.toUpperCase());
  // this will throw an error because the string object doesn't 
  // have a map() function
  // console.log(hobby.map());
}