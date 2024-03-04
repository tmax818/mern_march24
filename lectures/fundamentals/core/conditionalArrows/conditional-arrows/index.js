// Problem 1
// Write an arrow function that checks to see if a user is older than 18.
// If they are older than 18, the output should be:

// "You are good to go!"

// If they are not older than 18, the output should be:

// "Sorry! You must be 18 or older!"


// The conditional logic should be written with a ternary operator.

const problemOne = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!" ;

console.log(problemOne(20))
console.log(problemOne(2))

// Problem 2
// Write an arrow function that checks to see if it is currently raining.


// If it is raining, the output should be:

// "Get your rain jacket!"

// If it is not raining, the output should be:

// "No rain on today's forecast!"


// The conditional logic should be written with a ternary operator.

const problemTwo = raining => raining ? "Get your rain jacket!" : "No rain on today's forecast!" ;

console.log(problemTwo(true))
console.log(problemTwo(false))