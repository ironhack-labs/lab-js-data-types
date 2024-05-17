/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = s1.concat(" ", s2, " ", s3, " ", s4, " ", s5);

// Print out the concatenated string

console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const camelTail = part1[3].toUpperCase() + part2[5].toUpperCase();

// Print the cameLtaiL-formatted string

console.log(camelTail);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tip = billTotal * 0.15; 

// Print out the tipAmount

console.log(tip); 

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNumber = Math.random() * 10;
let roundedDown = Math.floor(randomNumber);

// Ask about why this is working with the * 10 vs not

// Print the generated random number

console.log(roundedDown);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // guess = true - answer = false
 
const expression2 = a || b; // guess = true - answer = true

const expression3 = !a && b; // guess = false - answer = false

const expression4 = !(a && b); // guess = true - answer = true

const expression5 = !a || !b; // guess = true - answer = true

const expression6 = !(a || b); // guess = true - answer = false

const expression7 = a && a; // guess = true - answer = true

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);