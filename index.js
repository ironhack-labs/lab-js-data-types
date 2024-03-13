/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let s = s1 + s2 + s3 + s4 + s5;


// Print out the concatenated string
console.log(s);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
s = part1.substring(0, part1.length - 1) + part1.charAt(part1.length - 1).toUpperCase() + 
    part2.substring(0, part2.length - 1) + part2.charAt(part2.length - 1).toUpperCase();


// Print the cameLtaiL-formatted string
console.log(s);



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
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;  // false

const expression2 = a || b;  // true

const expression3 = !a && b;  // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b);  // false

const expression7 = a && a;  // true