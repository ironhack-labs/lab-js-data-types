/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const concastic= s1 + s2 + s3 + s4 + s5;

// Print out the concatenated string

console.log(concastic);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let firstp = part1[3].toUpperCase();
let secondp = part2[0].toUpperCase();
let art1 = part1.slice(0, 3)
let art2 = part2.slice(1);
cameLTail = art1 + firstp + secondp + art2;
// Print the cameLtaiL-formatted string
console.log(cameLTail);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = billTotal*0.15;


// Print out the tipAmount
console.log(billTotal+tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let rdm = Math.random() * 10;
rdm = Math.round(rdm)
// Print the generated random number
console.log(rdm);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false
const expression2 = a || b;
true
const expression3 = !a && b;
true
const expression4 = !(a && b);
true
const expression5 = !a || !b;
false
const expression6 = !(a || b);
false
const expression7 = a && a;
true