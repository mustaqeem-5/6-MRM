// Objects

// 01 Simple obj
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk"
// }

// console.log(std);


// 02 use Dot notation , Bracket Notation
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk"
// }

// console.log(std.name);
// console.log(std["age"])


// 03 Update obj
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk"
// }
// std.age = 20;

// console.log(std);


// 04 use Delete Property
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk"
// }
// delete std.age;

// console.log(std);

// 05 use Method
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk",
//     greet: function() {
//         console.log(this.name);
//     }
// }

// std.greet();

// 06 Nested obj
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
    
//     address: {
//         city : "Mpk",
//         country : "Pakistan"
//     }
// }

// console.log(std.address);


// 07 Array me obj
// let std = [
//     {name : "Mustaqeem"},
//     {age : 19},
//     {class : 12},
//     {marks : 555},
//     {city : "Mpk"}
// ]

// console.log(std);


// 08 use obj.keys,values,entries
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk"
// }

// console.log(Object.keys(std));
// console.log(Object.values(std));
// console.log(Object.entries(std));


// 09 Obj Destructuring
// let std = {
//     name : "Mustaqeem",
//     age : 19,
//     class : 12,
//     city : "Mpk"
// };

// let {name, age, city} = std;

// console.log(name);
// console.log(age);
// console.log(city);

// 10 Spread op
// let std = {
//     name : "Mustaqeem",
//     age : 19
// }

// let updstd = {
//     ...std,
//     name : "ali",
//     city : "Mpk"
// }

// console.log(updstd);

