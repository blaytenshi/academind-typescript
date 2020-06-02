// this is how you declare enums. enum is a custom TS type followed by the name
// of the enum. Inside you declare all the enums you whish to declare without
// any form of quotations. In the background, each value is assigned a number
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string; 
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Jimmy",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}


let favouriteActivities: string[];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}