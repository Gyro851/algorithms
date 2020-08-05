//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 2: Reverse a String';

// === input QUESTION here ===
let displayQuestion = `
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.
Your result must be a string.

reverseString("hello") result... "olleh"
`;

// === input CODE QUSTION here ===
let displayCode = `
function reverseString(str) {
  
  return str;
}

x = reverseString("hello");
`;

// === input ANSWER here ===
let displayAnswer = ` 
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");
  
  
  // Solution 2
  function reverseString(str) {
    let strSplit = str.split('');
    let strReverse = strSplit.reverse();
    let strJoin = strReverse.join('');
    
    return strJoin;
  }
  reverseString("hello");
  
  
  // Solution 3 (loop backwards)
  function reverseString(str) {
    let final = "";  
    for (let i=str.length - 1; i >=0; i--) {
      // .substr(start, length)
      // final += str.substr(i,1);
      // final += str.charAt(i);
      final += str[i];
    }
    return final;
  }
  reverseString("hello");

  // Solution 4 (loop forwards)
function reverseString(str) {
  result = "";
  
  for (let i = 0; i <= str.length - 1; i++) {
    result = str[i] + result;
  }
  
  return result;
}

x = reverseString("hello");
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = 'olleh'";

//=========================================
//=========================================
//=========================================
