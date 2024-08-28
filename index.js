/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
console.log(`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let prim = part1 + part1[3].toUpperCase();
let segun = part2 + part2[5].toUpperCase();


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


console.log(prim + segun);
// Print the cameLtaiL-formatted string



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = billTotal + (billTotal/100) * 15;
// Print out the tipAmount

console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/


// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

console.log(false);

const expression2 = a || b;

console.log(true);

const expression3 = !a && b;

console.log(true);

const expression4 = !(a && b);

console.log(true);

const expression5 = !a || !b;

console.log(true);

const expression6 = !(a || b);

console.log(false);

const expression7 = a && a;

console.log(true);