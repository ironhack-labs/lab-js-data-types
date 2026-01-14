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




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let result = part1.slice(0,part1.length-1) + part1.slice(part1.length-1).toUpperCase() + part2.slice(0,part2.length-1) + part2.slice(part2.length-1).toUpperCase();
console.log(result);

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * 0.15;
console.log(tipAmount)

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNumber =  Math.floor(Math.random() * 10) + 1;
// Math.random() generates a fraction number. You them multiply by 10. 
// Math.floor() then rounds it down to the nearest integer, resulting in values from 0 to 9. Adding 1 shifts the range to be from 1 to 10 (inclusive).

console.log(randomNumber);

// Print the generated random number


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:

const expression1 = a && b; // true AND false = false

const expression2 = a || b; // true OR false = true

const expression3 = !a && b; // NOT true (false) AND false = false <- False + false = false

const expression4 = !(a && b); // NOT (true AND false) = false AND true  = false --> NOT false = true

const expression5 = !a || !b; // NOT true (false) OR NOT false (true) = false OR true = true

const expression6 = !(a || b); // NOT (true OR false) = false OR true = true --> NOT true = false

const expression7 = a && a; // true AND true = true