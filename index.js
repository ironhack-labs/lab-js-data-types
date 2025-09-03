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

const tongTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s4}`;
console.log(tongTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const lastLetter1 = part1[3].toUpperCase();
const lastLetter2 = part2[5].toUpperCase();

const firstP1 = part1.slice(-4);
const firstP2 = part2.slice(-5);

console.log(`${firstP1}${lastLetter1}${firstP2}${lastLetter2}`);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

// Calculate the tip (15% of the bill total)

// Print out the tipAmount

const billTotal = 84;
let tipAmount = billTotal * 0.15;

console.log(tipAmount);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
let ramdomNumber = Math.floor(Math.random() * 11);
console.log(ramdomNumber);
// Generate a random integer between 1 and 10 (inclusive)

// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false
const expression2 = a || b;
// true
const expression3 = !a && b;
// false
const expression4 = !(a && b);
//true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//false
const expression7 = a && a;
// true

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);
