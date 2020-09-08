//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 13: Falsy Bouncer';

// === input QUESTION here ===
let displayQuestion = `
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Result...
[7,ate,9]
`;

// === input CODE QUSTION here ===
let displayCode = `
function bouncer(arr) {

  return arr;
}

x = bouncer([7, "ate", "", false, 9]);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function bouncer(arr) {

  return arr.filter(Boolean);
}

x = bouncer([7, "ate", "", false, 9]);


// Solutuion 2
function bouncer(arr) {

  return arr.filter(function(item) {
    return item;
  });
}

// Solution 3
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = '7,ate,9'";

//=========================================
//=========================================
//=========================================
