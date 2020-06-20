// you can can even set it whatever you like but usually just numbers
enum Role {
  ADMIN = 4,
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
  // will throw an error because TS can't infer the next value after author
  // USER
}

const person: {
  name: string; 
  age: number;
  hobbies: string[];
  role: Role; // give it the type!
} = {
  name: "Jimmy",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
}


let favouriteActivities: string[];

console.log(person.name);
console.log("Role value", person.role); // should log out AUTHOR

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}