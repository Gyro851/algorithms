//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 7: Repeat String';

// === input QUESTION here ===
let displayQuestion = `
Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if numis not a positive number.

repeatStringNumTimes("abc", 3) should return "abcabcabc".
`;

// === input CODE QUSTION here ===
let displayCode = `
function repeatStringNumTimes(str, num) {

  return str;
}

x = repeatStringNumTimes("abc", 3);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function repeatStringNumTimes(str, num) {

  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);


// Solution 2
let accumulatedStr = '';

while (num > 0) {
  accumulatedStr += str;
  num--;
}
return accumulatedStr;

// Solution 3
let result = "";
if(let < 0) return "";
for (let i = 0; i < num; i++) {
  result += str;
}
return result;

// Solution 4
if(num < 0) return "";
if(num === 1) return str; // base case
return str + repeatStringNumTimes(str, num -1);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = 'abcabcabc'";

//=========================================
//=========================================
//=========================================
