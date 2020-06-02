// this is how you declare enums. enum is a custom TS type followed by the name
// of the enum. Inside you declare all the enums you whish to declare without
// any form of quotations. In the background, each value is assigned a number
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Jimmy",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favouriteActivities;
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
