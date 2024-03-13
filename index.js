/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const concatenatedStr = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string
console.log(concatenatedStr);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let lastChar = part1.slice(-1).toUpperCase();
let lastChar2 = part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string

const result = part1.slice(0,-1) + lastChar + part2.slice(0,-1) +  lastChar2;
console.log(`The concatenated string is: ${result}`);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = billTotal * (15/100);

// Print out the tipAmount
console.log(tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const newInt = Math.ceil(Math.random(0,1)*10);

// Print the generated random number
console.log(`New number is ${newInt}`);


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

console.log(`Expression1 is: ${expression1} , My guess is FALSE`);
console.log(`Expression2 is: ${expression2} , My guess is TRUE`);
console.log(`Expression3 is: ${expression3} , My guess is FALSE`);
console.log(`Expression4 is: ${expression4} , My guess is TRUE`);
console.log(`Expression5 is: ${expression5} , My guess is TRUE`);
console.log(`Expression6 is: ${expression6} , My guess is FALSE`);
console.log(`Expression7 is: ${expression7} , My guess is TRUE`);

