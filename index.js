/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
  
// Concatenate the string variables into one new string
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " "+ s2 + " " + s1 + " " + s4;

// Print out the concatenated string
//console.log (tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1TailB = part1.subs;
//console.log (part1TailB);

const part1Tail = part1.slice(3). toUpperCase();
//console.log (part1Tail);


const part2Tail = part2.slice(5).toUpperCase()
//console.log (part2Tail);

//console.log (part1.slice() + part1Tail) 

// Print the cameLtaiL-formatted string
//console.log (result.slice(5).toUpperCase());



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount
//console.log (tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
//console.log ((Math.random() * 10) + 1);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //false

const expression6 = !(a || b); //true

const expression7 = a && a; // true