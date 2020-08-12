//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Data Structure - Exercise 4: Add and Remove Items2';

// === input QUESTION here ===
let displayQuestion = `
We have defined a function, popShift, which takes an array as an argument and returns a new array. 

Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.


popShift(['challenge', 'is', 'not', 'complete']) should return
[challenge,complete]

`;

// === input CODE QUSTION here ===
let displayCode = `
function popShift(arr) {
  let popped;
  let shifted;

  return [shifted, popped];
}

x = popShift(['challenge', 'is', 'not', 'complete']);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

x = popShift(['challenge', 'is', 'not', 'complete']);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
// let expectedOutput = "let Expecting = 6";
let expectedOutput = "let Expecting = 'challenge,complete'";

//=========================================
//=========================================
//=========================================
