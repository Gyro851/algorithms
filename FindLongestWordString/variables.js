//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 4: Find the Longest Word in a String';

// === input QUESTION here ===
let displayQuestion = `
Return the length of the longest word in the provided sentence.
Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") result... 6
`;

// === input CODE QUSTION here ===
let displayCode = `
function findLongestWordLength(str) {

  return str.length;
}

x = findLongestWordLength("The quick brown fox jumped over the lazy dog");
`;

// === input ANSWER here ===
let displayAnswer = ` 
  function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  
  // Solution 2
  function findLongestWordLength(str) {
    let words = str.split(" ");
    let maxLength = "";
  
    for (let word of words) {
      if (word.length > maxLength.length) maxLength = word;
    }
    return maxLength.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  // Solution 3
  function findLongestWordLength(str) {
  
    return str.split(" ").sort(
      function (a, b) {
      return b.length - a.length;
      })[0].length;
    }
  
  x = findLongestWordLength("The quick brown fox jumped over the lazy dog");
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = 'let Expecting = 6';

//=========================================
//=========================================
//=========================================
