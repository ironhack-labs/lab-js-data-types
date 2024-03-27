/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

console.log(tongueTwister);

// Create a new variable named tongueTwister by combining the existing strings s1, s2, s3, s4, and s5 to form the following tongue twister
// string: "Fred fed Ted bread and Ted fed Fred bread".

// Once done, print out the tongueTwister string using console.log().
// Print out the concatenated string

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
console.log("**********");
const part1 = "java";
const part2 = "script";
console.log(part2.length);

const partUp = part1.slice(0, 4).toUpperCase();
const partdown = partUp.slice(0, 3).toLowerCase();
const newWord = partdown + part1[3].toUpperCase();

const partUp2 = part2.slice(0, 6).toUpperCase();
const partdown2 = partUp2.slice(0, 6).toLowerCase();
const newWord2 = partdown2 + part2[5].toUpperCase();
const result = newWord + newWord2;
console.log(result);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tipAmount = billTotal * 0.15;
console.log(tipAmount);
// Calculate the tip (15% of the bill total)

// Print out the tipAmount

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const rand = Math.floor(Math.random() * 10) + 1;
console.log(rand);
// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false
console.log(expression1);
const expression2 = a || b; //false
console.log(expression2);
const expression3 = !a && b; //true
console.log(expression3);
const expression4 = !(a && b); //true
console.log(expression4);
const expression5 = !a || !b; //false
console.log(expression5);
const expression6 = !(a || b); //false
console.log(expression6);
const expression7 = a && a; //true
console.log(expression7);
