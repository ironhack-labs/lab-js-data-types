/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`;

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const javA = part1.slice(0,3) + part1[3].toUpperCase();
const scripT = part2.slice(0,5) + part2[5].toUpperCase();
const result = javA + scripT;

// Print the cameLtaiL-formatted string
console.log(result)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipBT = billTotal * 0.15;
const tipTotal = tipBT + billTotal;

// Print out the tipAmount
console.log(tipTotal)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber;
let count = 0;

while (count < 1) {
   randomNumber = Math.ceil(Math.random() * 10);
   count++;
}

// Print the generated random number
console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false

const expression2 = a || b;
// true

const expression3 = !a && b;
// false

const expression4 = !(a && b);
// true

const expression5 = !a || !b;
// true

const expression6 = !(a || b);
// false

const expression7 = a && a;
// true