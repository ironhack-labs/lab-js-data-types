/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let concatenatedString = `${s1} ${s2} ${s3} ${s4} ${s5}`;
let concatenateWithSpaces = s1.concat(" ", s2, " ", s3, " ", s4, " ", s5);


// Print out the concatenated string
console.log(concatenatedString);
console.log(concatenateWithSpaces)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
concatenatedString = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(concatenatedString);



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
let number = Math.floor(Math.random() * 10 + 1);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// since a is true we need to check the next value, which is the last so the value is b which is false the result is false
console.log(expression1);

const expression2 = a || b;
// since a is true then no need to check the next value so the result is "a" which is true
console.log(expression2);
const expression3 = !a && b;
// !a is false since this is and operator the outcome will be false as well so no need to check the second value we will be assigning "!A" to experiession 3
// so it should be false
console.log(expression3);

const expression4 = !(a && b);
//(a&&b) is false the value comes from false and since it should be !false, then the assignged value should be true
console.log(expression4);

const expression5 = !a || !b;
// it is like false || true then we assign the second value which is "!b" then it is true;
console.log(expression5);

const expression6 = !(a || b);
// a is true no need to check the second value so outcome of (a||b) is "!a" so it is false
console.log(expression6);

const expression7 = a && a;
// it will be equal the a so it is true;
console.log(expression7);
