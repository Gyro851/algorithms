//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Data Structure - Exercise 10: Check For Element';

// === input QUESTION here ===
let displayQuestion = `
Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

result...
true

`;

// === input CODE QUSTION here ===
let displayCode = `
function quickCheck(arr, elem) {
  
  return arr;
}

x = quickCheck(["onions", "squash", "shallots"], "onions")
`;

// === input ANSWER here ===
let displayAnswer = ` 
function quickCheck(arr, elem) {

  return arr.indexOf(elem) != -1;
}

x = quickCheck(["onions", "squash", "shallots"], "onions")

// Solution 2
function quickCheck(arr, elem) {
  
  return arr.indexOf(elem) >= 0 ? true : false;
}

// Solution 3
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

// Solution 4
function quickCheck(arr, elem) {
  
  for (let i=0; i<arr.length; i++){
   //if (arr[i] == elem) return true;
   //return (arr[i] == elem) ? true: false;
   return (arr[i] == elem); 
  }
  
  return arr;
}

// Notes:
// 0 = true   -1 = false
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
// let expectedOutput = "let Expecting = 6";
let expectedOutput = 'let Expecting = true';

//=========================================
//=========================================
//=========================================
