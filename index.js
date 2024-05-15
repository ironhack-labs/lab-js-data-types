/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";

const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
let tongueTwister = " ";
tongueTwister +=
  '"' +
  s1 +
  " " +
  s2 +
  " " +
  s3 +
  " " +
  s4 +
  " " +
  s5 +
  " " +
  s3 +
  " " +
  s2 +
  " " +
  s1 +
  " " +
  s4 +
  '"';
// Concatenate the string variables into one new string
console.log(tongueTwister);
console.log(tongueTwister.typeof);

// Print out the concatenated string

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
console.log(part1.length);
const formattedPart1 = part1.slice(0, 3) + part1[3].toUpperCase();
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
console.log(`${formattedPart1}`);

console.log(part2.length);
const formattedPart2 = part2.slice(0, 5) + part2[5].toUpperCase();
console.log(formattedPart2);
let camelTail = formattedPart1 + formattedPart2;
console.log(camelTail);
// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

let tipAmount = billTotal % 15;
console.log(tipAmount);
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

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// False
console.log(a && b);
const expression2 = a || b;
//true
console.log(a || b);

const expression3 = !a && b;
//false
console.log(!a && b);
const expression4 = !(a && b);
//true
console.log(a && b); // FALSE

const expression5 = !a || !b;
// True
console.log(!a || !b);

const expression6 = !(a || b);
//true
console.log(!(a || b)); // FALSE

const expression7 = a && a;
//true
console.log(a && a);
