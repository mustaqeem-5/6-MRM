# Day 6 — End-of-Day Checklist

Date: 7/Oct/2026

## Today’s Objective
Learn JavaScript Modules and understand how to organize JavaScript code into separate files.

## Topics Covered
-What are JavaScript Modules?
-Why do we use Modules?
-`export`
-`import`
-Named Export
-Named Import
-Multiple Named Exports
-Default Export
-Default Import
-Exporting Objects
-Importing Objects
-File Paths with `./`
-`.js` extension in imports
-`type="module"` in HTML
-Using multiple JavaScript files together

## Practice Completed
-Exercise 1 — Basic Export & Import
-Exercise 2 — Multiple Named Exports
-Exercise 3 — Default Export
-Exercise 4 — Object Export
-Exercise 5 — Final Challenge
-Created `student.js`
-Created `result.js`
-Created `main.js`
-Imported `student` and `checkResult` into `main.js`
-Used `checkResult()` with student marks
-Fixed the module import path error

## Problem / Blocker
- Faced an `ERR_MODULE_NOT_FOUND` error while importing a JavaScript file.
- The problem was the missing `.js` extension in the import path.
- Fixed it by using the complete file name, for example:
```js
import { add } from "./day6.1.js";
```

## What I Learned
I learned how JavaScript Modules allow me to divide code into multiple files and use `export` and `import` to share functions, objects, and other values between files.

## What I Can Explain
- What a JavaScript Module is
- Why Modules are useful
- How `export` works
- How `import` works
- Named vs Default Export
- How to import multiple values
- How to export and import objects
- How to use modules with Node.js
- How to correctly write module file paths

## GitHub Proof
https://github.com/mustaqeem-5/6-MRM/tree/main/Day6

## Tomorrow’s First Task
JavaScript DOM