const person: { 
  // you typically don't need to explicity declare these types since TS is
  // smart enough to infer their types (maybe you want the string[] type for
  // a more explicit definition). But you will need to declare it for the tuple
  name: string; 
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Jimmy",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // this is a tuple, a tuple is a fixed length array
  // first is a numeric identifier second is string identifier
  role: [2, 'author']
}

// Even though we've declared a fixed array in our person Type, the push()
// method is an exception here that. But it will stop the next line which is
// assigning the second value in the array with a number when it should be a
// string instead.
person.role.push('admin');
person.role[1] = 10;

let favouriteActivities: string[];


console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}