// Exercise 1
// const heading = document.getElementById("heading");
// const changeBtn = document.getElementById("changeBtn");

// changeBtn.addEventListener("click", function () {
//     heading.textContent = "JavaScript Events";
// });


// Exercise 2
// let count = 0;

// const countDisplay = document.getElementById("count");
// const increaseBtn = document.getElementById("increase");
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");

// increaseBtn.addEventListener("click", function () {
//     count = count + 1;
//     countDisplay.textContent = count;
// });

// decreaseBtn.addEventListener("click", function () {
//     count = count - 1;
//     countDisplay.textContent = count;
// });

// resetBtn.addEventListener("click", function () {
//     count = 0;
//     countDisplay.textContent = count;
// });


// Exercise 3
// const heading = document.getElementById("heading");

// heading.addEventListener("mouseenter", function () {
//     heading.style.color = "green";
// });

// heading.addEventListener("mouseleave", function () {
//     heading.style.color = "black";
// });




// Exercise 4
// const nameInput = document.getElementById("nameInput");
// const preview = document.getElementById("preview");

// nameInput.addEventListener("input", function () {
//     const name = nameInput.value.trim();

//     if (name === "") {
//         preview.textContent = "Your name will appear here";
//     } else {
//         preview.textContent = name;
//     }
// });




// Exercise 5
// const message = document.getElementById("message");
// const count = document.getElementById("count");

// message.addEventListener("input", function () {
//     count.textContent = message.value.length;
// });



// Exercise 6
// const form = document.getElementById("myForm");
// const username = document.getElementById("username");
// const message = document.getElementById("message");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = username.value.trim();

//     if (name === "") {
//         message.textContent = "Please enter your username.";
//     } else {
//         message.textContent = `Welcome, ${name}!`;
//     }
// });


// Exercise 7
// const keyboardInput = document.getElementById("keyboardInput");
// const keyOutput = document.getElementById("keyOutput");

// keyboardInput.addEventListener("keydown", function (event) {
//     keyOutput.textContent = `Pressed key: ${event.key}`;

//     console.log("Pressed key:", event.key);
// });



// Exercise 8
// const profile = document.getElementById("profile");
// const name = document.getElementById("name");
// const status = document.getElementById("status");

// const nameInput = document.getElementById("nameInput");
// const updateBtn = document.getElementById("updateBtn");
// const statusBtn = document.getElementById("statusBtn");
// const message = document.getElementById("message");

// // Update student name
// updateBtn.addEventListener("click", function () {
//     const newName = nameInput.value.trim();

//     if (newName === "") {
//         message.textContent = "Please enter your name.";
//     } else {
//         name.textContent = newName;
//         message.textContent = "Name updated successfully.";

//         nameInput.value = "";
//     }
// });

// // Change student status
// statusBtn.addEventListener("click", function () {
//     status.textContent = "Learning JavaScript Events";
//     message.textContent = "Status updated successfully.";
// });
