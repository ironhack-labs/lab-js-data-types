/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`
console.log(tongueTwister)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const cameLtaiL = part1.slice(0, 3) + part1[3].toUpperCase()+ part2.slice(0, 5) + part2[5].toUpperCase()
console.log(cameLtaiL)
// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipTotal = 84*15/100
console.log(tipTotal)

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random()*10) +1

// Print the generated random number

console.log(randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; 
console.log(expression1)  
// this should be false.

const expression2 = a || b;
console.log(expression2)
//this should be true.

const expression3 = !a && b;
console.log(expression3)
//this should be false

const expression4 = !(a && b);
console.log(expression4)
//this should be true.

const expression5 = !a || !b;
console.log(expression5)
//this should be true

const expression6 = !(a || b);
console.log(expression6)
// this should be false.

const expression7 = a && a;
console.log(expression7)
//this should be true.