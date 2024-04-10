/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister = "";

tongueTwister += " " + s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

console.log(tongueTwister);

// ITERATION 2

// Concatenate the string variables into one new string

const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let firstLast = part1[part1.length - 1].toUpperCase();
let secondLast = part2[part2.length - 1].toUpperCase();

let firstPartHalf = part1.substring(0, part1.length - 1);
let part1Complete = firstPartHalf + firstLast;

let secondPartHalf = part2.substring(0, part2.length - 1);
let part2Complete = secondPartHalf + secondLast;

let wordComplete = part1Complete + part2Complete;
console.log(wordComplete);


//ITERATION 3

// Print the cameLtaiL-formatted string
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipAmount = billTotal * 15 / 100;
// Print out the tipAmount
console.log(tipAmount);

// ITERATION 4

// Print out the concatenated string
let randomNumber = Math.round(Math.random() * (10 - 1) + 1);
console.log(randomNumber);


// ITERATION 5

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log(expression1);

const expression2 = a || b; // true
console.log(expression2);


const expression3 = !a && b; // false
console.log(expression3);


const expression4 = !(a && b); // true
console.log(expression4);


const expression5 = !a || !b; // true
console.log(expression5);


const expression6 = !(a || b); // false
console.log(expression6);


const expression7 = a && a; // true
console.log(expression7);


// Once you are done writing down your answers, print out each expression and compare it to your answer



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
// const part1 = "java";
// const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
// const billTotal = 84;

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

// const a = true;
// const b = false;

// Try and guess the output of the below expressions first and write your answers down:
/*const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a; */