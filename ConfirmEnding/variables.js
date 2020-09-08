//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 6: Confirm Ending';

// === input QUESTION here ===
let displayQuestion = `
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith()method, But we would like you to use one of the JavaScript substring methods instead.

confirmEnding("Abstraction", "action") should return true.
`;

// === input CODE QUSTION here ===
let displayCode = `
function confirmEnding(str, target) {

  return str;
}

x = confirmEnding("Abstraction", "action");
`;

// === input ANSWER here ===
let displayAnswer = ` 
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Abstraction", "action");


// Solution 2
if (str.endsWith(target)) {
  return true;
}
return false;

return str.endsWith(target);


// Solution 3
if (str.substr(-target.length) === target) {
  return true;
}
return false;
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = 'let Expecting = true';

//=========================================
//=========================================
//=========================================
