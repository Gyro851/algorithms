//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 11: Title Case a Sentence';

// === input QUESTION here ===
let displayQuestion = `
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("No need to SHOUT!") should return "No Need To Shout!"
`;

// === input CODE QUSTION here ===
let displayCode = `
function titleCase(str) {
  
  return str;
}

x = titleCase("No need to SHOUT!");
`;

// === input ANSWER here ===
let displayAnswer = ` 
function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + 
    words[i].substring(1);
  }
  return words.join(" ");
}

x = titleCase("No need to SHOUT!");

// Solution 2  
function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let capital = [];

  for (let i = 0; i < words.length; i++) {
    capital.push(words[i][0].toUpperCase() + 
    words[i].slice(1));
  }
  return capital.join(" ");
}

x = titleCase("No need to SHOUT!");

// Solution 3
function titleCase(str) {
  
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() +
      word.substr(1);
    })
    .join(" ");
}

x = titleCase("No need to SHOUT!");

// Solution 4
function titleCase(str) {
  
  let convertToArray = str.toLowerCase().split(" ");
  let result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

x = titleCase("No need to SHOUT!");

`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = 'No Need To Shout!'";

//=========================================
//=========================================
//=========================================
