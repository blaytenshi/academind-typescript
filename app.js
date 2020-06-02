// you can also choose to start at a certain number so...
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 4] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR"; // 6
})(Role || (Role = {}));
var person = {
    name: "Jimmy",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
var favouriteActivities;
console.log(person.name);
console.log("Role value", person.role); // should log out 6
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
