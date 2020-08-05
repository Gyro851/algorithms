//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Data Structure - Exercise 5: The Splice Method';

// === input QUESTION here ===
let displayQuestion = `
Modify the function using splice() to change the array to required output in their respective places; 

You can only use the splice() method. 
Can you do it only using splice() x 3 times?

result...
["I", "will", "understand"]

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

  arr.splice(4)
  arr.splice(2,1)
  arr.splice(1,1,"will")

  return arr; 
}

x = updateText(["I", "do", "not", "understand","you","any","more"]);

// Originale Text
//["I", "do", "not", "understand","you","any","more"]

// delete elements from "any" to end end of array 
//arr = arr.splice(4)
//["I", "do", "not", "understand"]

// delete element "do"
arr = arr.splice(2,1)
//["I", "do", "understand"]

// delete and replace element "do" to "will"
// arr = arr.splice(1,1,"will")
//["I", "will", "understand","you"]
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
// let expectedOutput = "let Expecting = 6";
let expectedOutput = "let Expecting = 'I,will,understand'";

//=========================================
//=========================================
//=========================================
