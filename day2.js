// Arrays

// Task 1:

// Largest Number 
// let marks = [75, 80, 65, 90, 85];

// marks.sort(function(a, b){return b-a});

// console.log("Largest Num:",marks[0]);

// Smallest Number
// let marks = [75, 80, 65, 90, 85];

// marks.sort(function(a, b){return a-b});

// console.log("Smallest Num:",marks[0]);

// Calculate Total Marks
// let calculateMarks = [75, 80, 65, 90, 85];

// let Total = calculateMarks.reduce((sum , mark) => {
//     return sum + mark;
// }, 0);

// console.log("Total Marks:",Total);


// Average Total Marks
// let AverageMarks = [75, 80, 65, 90, 85];
// let Total = 395;

// let avg = Total / AverageMarks.length;

// console.log("Average Marks:",avg);

// Passed Std
// let Marks = [75, 80, 44, 65, 90, 85];
// let passed = Marks.filter(function(marks) {
//     return marks >= 50;
// }).length;

// console.log("Passed Std:", passed);


// Failed Std 
// let Marks = [75, 80, 44, 65, 90, 85];
// let Failed = Marks.filter(function(marks) {
//     return marks < 50;
// }).length;

// console.log("Failed Std:", Failed);

// console.log(passed);

// Particular std
// let std = ["Ali","Hamza","Raza","Ahmed"];

// console.log(std[0]);





// Add a new std 
// let std = ["Ali","Hamza","Raza","Ahmed"];

// std[0] = "Mustaqeem";

// console.log(std);


// Remove a std
// let std = ["Ali","Hamza","Raza","Ahmed"]

// std.pop();

// console.log(std);


// Task 2: 
// const students = [
//     { name: "Ali", marks: 78 },
//     { name: "Ahmed", marks: 62 },
//     { name: "Sara", marks: 89 }
// ];

// Total Std
// console.log("Total Std:",students.length);


// Passed Std 
// function passedStudents(students) {
//     return students.filter(function(student) {
//         return student.marks >= 50;
//     });
// }

// console.log("Passed:",passedStudents(students));


// Failed Std 
//  function failedStudents(students) {
//      return students.filter(function(student) {
//          return student.marks < 50;
//      });
// }

// console.log("Failed:",failedStudents(students));


// Highest Marks 
// function highestMarks(students) {
//     return Math.max(...students.map(function(student) {
//         return student.marks;
//     }));
// }

// console.log("HighestMarks:",highestMarks(students));


// Lowest Marks 
// function lowestMarks(students) {
//     return Math.max(...students.map(function(student) {
//         return student.marks;
//     }));
// }

// console.log("LowestMarks:",lowestMarks(students));

// Average Marks
// function averageMarks(students) {
//     let Total = students.reduce(function(sum, student) {
//         return sum + student.marks;
//     }, 0);

//     return Total / students.length;
// }

// console.log(averageMarks(students));


// Grade 
// function studentGrade(marks) {

//     if (marks >= 80) {
//         return "A";
//     } 
//     else if (marks >= 70) {
//         return "B";
//     } 
//     else if (marks >= 60) {
//         return "C";
//     } 
//     else if (marks >= 50) {
//         return "D";
//     } 
//     else {
//         return "Fail";
//     }
// }

// Grade of all std
// students.forEach(function(student) {
//     console.log(
//         student.name,
//         "Marks:", student.marks,
//         "Grade:", studentGrade(student.marks)
//     );
// });


