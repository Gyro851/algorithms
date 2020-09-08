//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 3: Factorialize a Number';

// === input QUESTION here ===
let displayQuestion = `
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

factorialize(5) result... "120"
`;

// === input CODE QUSTION here ===
let displayCode = `
  function factorialize(num) {
    
    return num;
  }
  
  x = factorialize(5);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = 'let Expecting = 120';

//=========================================
//=========================================
//=========================================
