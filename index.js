/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister = (s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s1 + " " + s2 + " " + s3 + " " + s4)

console.log(tongueTwister);



// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const part1start = part1.substring(0, part1.length - 1);
const part1end = part1[part1.length - 1].toUpperCase();
const part2start = part2.substring(0, part2.length - 1);
const part2end = part2[part2.length - 1].toUpperCase();

const result = part1start + part1end + part2start + part2end
console.log(result);






// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const propin = (15 / 100);

const tipAmount = (billTotal * propin);
console.log(tipAmount);



// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number


const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);
