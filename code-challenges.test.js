// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('arrayShuffled', () => {
  it('takes in an array, removes the first item from array, then shuffles the remaining array', () => {
    expect(arrayShuffled(colorsOne)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(arrayShuffled(colorsTwo)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
  

const colorsOne = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colorsTwo = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called arrayShuffled. 
// Use the shift function to remove the first element from the array. 
// Use for loop to iterate the array and select an index.
 

const arrayShuffled = (array) => {
  array.shift()
  for (let i = 0; i < array.length; i++) {
    let index = Math.floor(Math.random() * (array.length));
    let newIndex = array[i]
    array[i] = array[index]
    array[index] = newIndex
  }
  return array
}

// $ /Users/learnacademy/Desktop/week-4-assessment-jameshlee1/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   arrayShuffled
//     ✓ takes in an array, removes the first item from array, then shuffles the remaining array (1 ms)



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.


// a) Create a test with expect statements for each of the variables provided.

describe('endTally', () => {
  it('takes in an object and returns the end tally of votes', () => {
    expect(endTally(votesOne)).toEqual(11)
    expect(endTally(votesTwo)).toEqual(-31)

  })
})


const votesOne = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votesTwo = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
// Pseudo: Create a function called endTally. 
// Use the object and property values associated with the object to input key-values upVotes and downVotes.
// Calculate the objects and return the finalResults


const endTally = (obj) => {
  finalResults = obj.upVotes - obj.downVotes
  return finalResults
}


//  PASS  ./code-challenges.test.js
//   arrayShuffled
//     ✓ takes in an array, removes the first item from array, then shuffles the remaining array (2 ms)
//   endTally
//     ✓ takes in an object and returns the end tally of votes



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe('newArray', () => {
  it('takes in two arrays as arguments and returns one array with no duplicate values.', () => {
    expect(newArray(dataArrayOne, dataArrayTwo)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})


const dataArrayOne = ["array", "object", "number", "string", "Boolean"]
const dataArrayTwo = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called newArray with two arrays as an argument. 
// use spread operator to iterate the array then create a new variable arraysCombined containing both dataArrayOne and dataArrayTwo
// // use new Set to store the values and then create another variable finalArray setting the value of arraysCombined then return the finalArray.


const newArray = (arrayOne, arrayTwo) => {
  
  let arraysCombined = [...arrayOne, ...arrayTwo];
  let  finalArray = [...new Set(arraysCombined)];
  return finalArray
}

// PASS  ./code-challenges.test.js
// arrayShuffled
//   ✓ takes in an array, removes the first item from array, then shuffles the remaining array (1 ms)
// endTally
//   ✓ takes in an object and returns the end tally of votes
// newArray
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values.
