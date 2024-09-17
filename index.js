/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const newString = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string

console.log(newString);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
// const part1upperCased = part1.slice(0, 1).toUpperCase();
// const part2upperCased = part2.slice(0, 1).toUpperCase();
// const camelTail = part1upperCased + part1.slice(1) + " " + part2upperCased + part2.slice(1)
// console.log(part1upperCased);
// console.log(part2upperCased);
// console.log(camelTail)
const part1Uppercased = part1[0].toUpperCase() + part1.slice(1)
const part2Uppercased = part2[0].toUpperCase() + part2.slice(1)
const camelTail = part1Uppercased + " " + part2Uppercased
console.log(camelTail)

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
 const billTotal = 84;
// let tipAmount = billTotal * 0.15
// console.log(tipAmount)
const tipPercentage = 0.15 
const tipAmount = billTotal * tipPercentage 

// Calculate the tip (15% of the bill total)


// Print out the tipAmount
console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor((Math.random() * 10) + 1);

// Print the generated random number
console.log(randomNumber)
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;  false

const expression2 = a || b; false

const expression3 = !a && b;false

const expression4 = !(a && b);false

const expression5 = !a || !b;false

const expression6 = !(a || b);false

const expression7 = a && a; TRUE
