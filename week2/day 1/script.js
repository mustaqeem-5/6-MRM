// Exercise 1
// console.log(document.title);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.documentElement);



// Exercise 2
// const heading = document.getElementById("heading");
// const message = document.getElementById("message");

// console.log(heading.textContent);
// console.log(message.textContent);

// heading.textContent = "Welcome to My Website";


// Exercise 3
// const heading = document.querySelector("#title");
// const paragraph = document.querySelector(".description");

// console.log(heading.textContent);
// console.log(paragraph.textContent);


// Exercise 4
// const skills = document.querySelectorAll(".skill");

// console.log("Total skills:", skills.length);

// skills.forEach(function (skill) {
//     console.log("Skill:", skill.textContent);
// });


// Exercise 5
// const content = document.getElementById("content");

// // Read content
// console.log("textContent:", content.textContent);
// console.log("innerText:", content.innerText);
// console.log("innerHTML:", content.innerHTML);

// // Change text
// content.textContent = "Content changed using textContent";

// // Insert HTML
// content.innerHTML = `
//     <h2>New Heading</h2>
//     <p>New paragraph added using JavaScript.</p>
// `;


// Final Challenge
// Select elements
const profile = document.getElementById("profile");
const name = document.getElementById("name");
const course = document.getElementById("course");
const status = document.getElementById("status");
const skills = document.getElementById("skills");

// Print existing content
console.log("Name:", name.textContent);
console.log("Course:", course.textContent);
console.log("Status:", status.textContent);

// Update text
name.textContent = "Mustaqeem Malick";
course.textContent = "JavaScript DOM";
status.textContent = "Learning Web Development";

// Add CSS classes
name.classList.add("highlight");
profile.classList.add("card");

// Skills array
const skillNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL"
];

// Create and add list items
skillNames.forEach(function (skillName) {
    const item = document.createElement("li");

    item.textContent = skillName;
    item.classList.add("skill-item");

    skills.appendChild(item);
});

// Print total skills
console.log("Total skills:", skills.children.length);