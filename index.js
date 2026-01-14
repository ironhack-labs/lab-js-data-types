/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

// Print out the concatenated string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4} `;
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string

const newPart1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const newPart2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const result = `${newPart1} ${newPart2}`;
console.log(result);
/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipAmount = billTotal * (15 / 100);
console.log(tipAmount);
// Print out the tipAmount

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // FALSE
console.log(expression1);

const expression2 = a || b; // TRUE
console.log(expression2);

const expression3 = !a && b; // FALSE
console.log(expression3);

const expression4 = !(a && b); // TRUE
console.log(expression4);

const expression5 = !a || !b; // TRUE
console.log(expression5);

const expression6 = !(a || b); // FALSE
console.log(expression6);

const expression7 = a && a; // TRUE
console.log(expression7);
