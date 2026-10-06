// Day 5 Destructuring

// Exercise 1
// let student = {
//     name: "Mustaqeem",
//     age: 20,
//     city: "Karachi",
//     marks: 85
// };

// let {name, age, marks} = student;

// console.log(name);
// console.log(age);
// console.log(marks);


// Exercise 2
// let student = {
//     name: "Mustaqeem",
//     age: 20,
//     city: "Karachi",
//     marks: 85
// };

// let {name: studentName, marks: studentMarks} = student

// console.log(studentName);
// console.log(studentMarks);


// Exercise 3
// let student = {
//     name: "Mustaqeem",
//     age: 20
// };

// let {name, age, city = "Mpk"} = student;

// console.log(name);
// console.log(age);
// console.log(city);


// Exercise 4
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let [first, second, third] = fruits;

// console.log(first);
// console.log(second);
// console.log(third);


// Exercise 5
// let numbers = [10, 20, 30, 40];

// let [first, ,third] = numbers;

// console.log(first);
// console.log(third);


// Exercise 6
// let numbers = [10, 20, 30, 40, 50];

// let [a, b, ...remaining] = numbers

// console.log(a);
// console.log(b);
// console.log(remaining);


// Exercise 7
// let student = {
//     name: "Sara",
//     age: 19,
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };

// let {name, address: {city, country}} = student;

// console.log(name);
// console.log(city);
// console.log(country);


// Exersice 8
// let students = [
//     { name: "Ali", marks: 85 },
//     { name: "Sara", marks: 95 },
//     { name: "Ahmed", marks: 42 }
// ];

// let names = students.map(({name}) => name);

// console.log(names);



// Exercise 9
// let student = {
//     name: "Mustaqeem",
//     marks: 88
// };

// function showName({name, marks}) {

//     console.log(name);
//     console.log(marks);
// }

// showName(student);


// Final Challenge
// let student = {
//     name: "Mustaqeem",
//     age: 20,
//     marks: 87,
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     },
//     subjects: ["JavaScript", "SQL", "HTML"]
// };

// let {name, age, marks, 
//     address: 
//     {city,country},
//     subjects:[firstSubject, secondSubject, thirdSubject
//     ]
// } = student;

// console.log(name);
// console.log(age);
// console.log(marks);
// console.log(city);
// console.log(country);
// console.log(firstSubject);
// console.log(secondSubject);
// console.log(thirdSubject);


