/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = s1 + s2 + s3 + s4 + s5;

// Print out the concatenated string
console.log(`The tonguetwiser: ${tongueTwister}`)




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
let part1 = "java";
let part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
part1 = part1.slice(0,part1.length-1) + part1[part1.length-1].toUpperCase();
part2 = part2.slice(0,part2.length-1) + part2[part2.length-1].toUpperCase();
const camelTail = part1 + part2;

// Print the cameLtaiL-formatted string
console.log(camelTail);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * (15/100);

// Print out the tipAmount
console.log(`Billtip = ${tip}`)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.random() * 11;
console.log(randomNumber);
// Print the generated random number
// Return a random integer from 0 to 10 (both included):
const randomInteger = Math.floor(randomNumber);
console.log("randomInteger = ", randomInteger);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log("a && b = false; ", (a && b));

const expression2 = a || b;
console.log("a || b = true; ", (a || b));

const expression3 = !a && b;
console.log("!a && b = false; ", (!a && b));

const expression4 = !(a && b);
console.log("!(a && b) = true; ", (!(a && b)));

const expression5 = !a || !b;
console.log("!a || !b = true; ", (!a || !b));

const expression6 = !(a || b);
console.log("!(a || b) = false; ", (!(a || b)));

const expression7 = a && a;
console.log("a && a = true; ", (a && a));