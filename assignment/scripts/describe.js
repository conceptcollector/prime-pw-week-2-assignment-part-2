// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable and set it to Dane.
// We then create a conditional to check and see if name equals Mary. (If so, it would log 'Hi, Mary!')
// Since Dane does not equal Mary, the conditional will move to the else statement, so
// 'How do you do?' is logged to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable named super and also declare a variable named code. Code is initialized to 123.
// We create an if statement to check if code is equal to 123. It is, so secret is set to super and code is doubled.
// We set another if statement to check if code is greater than 250. 123 * 2 is 246, so this statement doesn't run.
// (If it did, secret would be set to duper.)
// 'super' is logged to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Three variables are created and initialized. isStudent is set to true, age is set to 34, and zip is set to 55407.
// A complex conditional is set. As the program is run, it bypasses the first two statements.
// In the first if statement, both conditions must be true. isStudent is true but zip is not greater than 8000.
// In the second statement, even though it's an or conditional, the variables don't pass either condition.
// The third statement is simpler and only requires isStudent to be true, so
// the console logs 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - minor fix, but the description has colorOne set to blue and colorTwo set to red. In the code, they're reversed.
// This wouldn't affect the results, but it is an incorrect detail.
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - only colorOne has been assigned to purple here. On the line below colorOne should be colorTwo = 'purple';.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// This code runs, but time is set as const. Should be let as time is always changing.
let temp = 40;
const time = 4;

// Additionally, the if statement is set as or, so we could be throwing away food unnecessarily.
// Should be &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// The log shows 'no entry' for a number of reasons. The description says we check if age is greater than or equal to minAge.
// But what the code is actually doing is seeing if minAge is less than or equal to age and then denying entry.
// So what's happening here is the bouncer is only letting in people under the age limit.
// Code should be:
// if(age >= minAge) {
// console.log('enter');
// } else {
// console.log('no entry');
// }
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

