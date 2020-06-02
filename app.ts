// you can also choose to start at a certain number so...
enum Role {
  ADMIN = 4,
  READ_ONLY, // 5
  AUTHOR // 6
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
console.log("Role value", person.role); // should log out 6

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}