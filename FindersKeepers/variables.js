//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 9: Finders Keepers';

// === input QUESTION here ===
let displayQuestion = `
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 

If no element passes the test, return undefined.
`;

// === input CODE QUSTION here ===
let displayCode = `
function findElement(arr, func) {

  return arr;
}

x = findElement([1, 2, 3, 4], num => num % 2 === 0);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function findElement(arr, func) {

  return arr.filter(func)[0]; 
}

x = findElement([1, 2, 3, 4], num => num % 2 === 0);

// Solution 2
function findElement(arr, func) {
  return arr.find(func);
}

// Solution 3
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// Solution 4
function findElement(arr, func) {
  
  for (let i=0;i<arr.length;i++) {
    if(func(arr[i])) return arr[i]; 
  }
  
  return undefined;
}
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = 'let Expecting = 2';

//=========================================
//=========================================
//=========================================
