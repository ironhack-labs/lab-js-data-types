/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/

// Create a new variable named **`tongueTwister`** by combining the existing strings `s1`, `s2`, `s3`, `s4`, and `s5` to form the following tongue twister string: `"Fred fed Ted bread and Ted fed Fred bread"`.

// Once done, print out the `tongueTwister` string using `console.log()`.

// ```js
// const s1 = "Fred";
// const s2 = "fed";
// const s3 = "Ted";
// const s4 = "bread";
// const s5 = "and";

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

console.log(tongueTwister);

// Concatenate the string variables into one new string




// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const camelTail = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const cameLtaiL = part1.slice


const upper
// Print the cameLtaiL-formatted string

console.log(camelTail);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)


// Print out the tipAmount

const tipAmount = billTotal * 0.15;

console.log(tipAmount);

// Other way with teacher

const totalWithTip = (84 * 15) / 100;

console.log(totalWithTip);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.floor(Math.random() * 10) + 1;
// Print the generated random number



console.log(randomNumber);

// Teacher way 
const randomNumberCeil = Math.ceil(Math.random() * 10)

console.log(randomNumberCeil)




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; false 
console.log(expression1);
const expression2 = a || b; true

const expression3 = !a && b;

const expression4 = !(a && b); 
console.log(expression4);

const expression5 = !a || !b;
console.log(expression5);

const expression6 = !(a || b); false
console.log(expression6);

const expression7 = a && a; true
console.log(expression7);