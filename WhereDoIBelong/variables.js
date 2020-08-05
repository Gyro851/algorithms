//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Exercise 14: Where Do I Belong';

// === input QUESTION here ===
let displayQuestion = `
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

getIndexToIns([40, 60], 50) Result..
[1]
`;

// === input CODE QUSTION here ===
let displayCode = `
function getIndexToIns(arr, num) {

  return num;
}

x = getIndexToIns([70, 40, 60, 10], 50);
`;

// === input ANSWER here ===
let displayAnswer = ` 
function getIndexToIns(arr, num) {

  arr.sort(function(a,b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  } 
  return arr.length; 
}

x = getIndexToIns([70, 40, 60, 10], 50);


// Solution 2
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

// Solution 3
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

// Solution 4
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);

// Solution 5
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

// Solution 6 - without: sort()
function getIndexToIns(arr, num) {
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
     if(num <= arr[i]) result = i;
  }
  
  return result;
}
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = 'let Expecting = 2';

//=========================================
//=========================================
//=========================================
