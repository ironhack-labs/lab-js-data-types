/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const newString = `${s1} ${s2} ${s3} ${s4} ${s5}`;
// Print out the concatenated string

console.log(newString);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
part1.slice(part1.length).toUpperCase()
const modifiedPart1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const modifiedPart2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const newWorld = modifiedPart1 + modifiedPart2;


// Print the cameLtaiL-formatted string

console.log(newWorld)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tip = (billTotal * 15)/100;

// Print out the tipAmount

console.log(tip)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const numberRandom = Math.floor(Math.random() * 10) + 1;

// Print the generated random number

console.log(numberRandom)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// console.log(false)
const expression2 = a || b;
// console.log(true)
const expression3 = !a && b;
// console.log(false)
const expression4 = !(a && b);
// console.log(true)
const expression5 = !a || !b;
// console.log(true)
const expression6 = !(a || b);
// console.log(false)
const expression7 = a && a;
// console.log(true)