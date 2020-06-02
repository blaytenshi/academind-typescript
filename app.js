var person = {
    name: "Jimmy",
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
// you can also seperately define variables of arrays and give them types
var favouriteActivities;
// will throw an error because it's not an array
// favouriteActivities = "sports"; 
// will also throw an array because it's a mixed type
// favouriteActivities = ["Sports", 1]
// this allows an array of mixed types
var anyActivities;
anyActivities = ['Sports', 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // here toUpperCase() doesn't throw an error because TS correctly identifies
    // that hobbies is a string array and thus will also do autocomplete for you
    console.log(hobby.toUpperCase());
    // this will throw an error because the string object doesn't 
    // have a map() function
    // console.log(hobby.map());
}
