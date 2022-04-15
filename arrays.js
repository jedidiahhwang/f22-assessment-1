//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE


//////////////////PROBLEM 4////////////////////
/* 
   
  push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

const answers = [];

for(let i = 0; i < bigOrSmallArray.length; i++) {
  if(bigOrSmallArray[i] > 100) {
    answers.push("big");
  } else if(bigOrSmallArray[i] <= 100) {
    answers.push("small");
  }
}

console.log(answers);