//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = 'Data Structure - Exercise 20: Modify Array In Object';

// === input QUESTION here ===
let displayQuestion = `
Update userObj with following criteria:

Add arg. 'friend' at the end of the [friends] array;
Remove element 'Kira' from the [friends];

Array [friends] Result...
[Sam,Tomo,Peter]
`;

// === input CODE QUSTION here ===
let displayCode = `
function addFriend(friend) {
  let userObj = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
    // change code below this line

    // change code above this line
    return userObj.data.friends;
  }
  
  x = addFriend("Peter")
`;

// === input ANSWER here ===
let displayAnswer = ` 
function addFriend(friend) {
  let userObj = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
    // change code below this line
    userObj.data.friends.push(friend);
    userObj.data.friends.splice(1,1);
    // change code above this line
    return userObj.data.friends;
  }
  
  x = addFriend("Peter")
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = 'Sam,Tomo,Peter'";

//=========================================
//=========================================
//=========================================
