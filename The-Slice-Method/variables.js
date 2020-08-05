//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Data Structure - Exercise 7: The Slice Method';

// === input QUESTION here ===
let displayQuestion = `
Modify the function using slice() to change the array to extract the following output;

result...
["do", "not"]

`;

// === input CODE QUSTION here ===
let displayCode = `
function updateText(arr) {

  return arr; 
}

x = updateText(["I","do","not","understand","you","any","more"]);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function updateText(arr) {

  return arr.slice(1,3)
}

x = updateText(["I","do","not","understand","you","any","more"]);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
// let expectedOutput = "let Expecting = 6";
let expectedOutput = "let Expecting = 'do,not'";

//=========================================
//=========================================
//=========================================
