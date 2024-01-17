/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let myString = s1 + s2 + s3 + s4 + s5;

// Print out the concatenated string
console.log(myString)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let lastLetter1 = part1[part1.length-1].toUpperCase();
let lastLetter2 = part2[part2.length-1].toUpperCase();

let part1WithoutLast = part1.slice(0,part1.length-1);
let part2WithoutLast = part2.slice(0,part2.length-1);

// Print the cameLtaiL-formatted string
console.log(part1WithoutLast + lastLetter1 + part2WithoutLast + lastLetter2)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = 0.15*84;

// Print out the tipAmount
console.log(tip)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomN = Math.random()*9 + 1;

// Print the generated random number
console.log(randomN)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false
const expression2 = a || b;
//true
const expression3 = !a && b;
//false
const expression4 = !(a && b);
//true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//false
const expression7 = a && a;
//true