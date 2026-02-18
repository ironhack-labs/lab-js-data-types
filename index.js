/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string

console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let part1Upper = part1.slice(0, -1) + part1[part1.length - 1].toUpperCase();
console.log(part1Upper);

let part2Upper = part2.slice(0, -1) + part2[part2.length - 1].toUpperCase();
console.log(part2Upper);

// Print the cameLtaiL-formatted string
let result = part1Upper + part2Upper;
console.log(result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount

console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomized = Math.random() * 10;
let randomNumber = randomized.toFixed();

// Print the generated random number

console.log(randomNumber);
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log('false1');
console.log(expression1);

const expression2 = a || b;
console.log('true2');
console.log(expression2);

const expression3 = !a && b;
console.log('false3');
console.log(expression3);

const expression4 = !(a && b);
console.log('true4');
console.log(expression4);

const expression5 = !a || !b;
console.log('true5');
console.log(expression5);

const expression6 = !(a || b);
console.log('false6');
console.log(expression6);

const expression7 = a && a;
console.log('true7')
console.log(expression7)