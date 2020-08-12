//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Data Structure - Exercise 3: Add and Remove Items';

// === input QUESTION here ===
let displayQuestion = `
We have defined a function, mixedNumbers, which we are passing an array as an argument. 

Modify the function by using push() and unshift() to add 1, 2 to the beginning of the array and 5, 6 to the end.

mixedNumbers([3, 4]) should return
[1, 2, 3, 4, 5, 6]
`;

// === input CODE QUSTION here ===
let displayCode = `
function mixedNumbers(arr) {

  return arr;
}

x = mixedNumbers([3, 4]);
`;

// === input ANSWER here ===
let displayAnswer = ` 
  function mixedNumbers(arr) {

    arr.unshift(1, 2);
    arr.push(3, 4);

    return arr;
  }
  
  x = mixedNumbers([3, 4]);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
// let expectedOutput = "let Expecting = 6";
let expectedOutput = "let Expecting = '1,2,3,4,5,6'";

//=========================================
//=========================================
//=========================================
