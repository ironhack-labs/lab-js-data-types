/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`

// Print out the concatenated string
console.log(`Tongue twister is: ${tongueTwister}`);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1Length = part1.length;
const part2Length = part2.length;
const result = part1.slice(0, part1Length - 1) + part1[part1Length - 1].toUpperCase() + part2.slice(0, part2Length - 1) + part2[part2Length - 1].toUpperCase();

// Print the cameLtaiL-formatted string
console.log(`Result is: ${result}`);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 15 / 100;

// Print out the tipAmount
console.log(`Tip amount is ${tipAmount}`);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.round(Math.random() * 10);

// Print the generated random number
console.log(`Random number is ${randomNumber}`);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;
console.log(`a : ${a}`);
console.log(`b : ${b}`);

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log(`a && b : ${expression1}`);

const expression2 = a || b; // true
console.log(`a || b : ${expression2}`);

const expression3 = !a && b; // false
console.log(`!a && b : ${expression3}`);

const expression4 = !(a && b); //true
console.log(`!(a && b) : ${expression4}`);

const expression5 = !a || !b; // true
console.log(`!a || !b : ${expression5}`);

const expression6 = !(a || b); // false
console.log(`!(a || b) : ${expression6}`);

const expression7 = a && a; // true
console.log(`a && a : ${expression7}`);