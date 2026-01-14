/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tonguwTwister = s1 + " " + s5 + " " + s2 + " " + s5 + " " + s3 + " " + s5 + " " + s4;


// Print out the concatenated string
console.log(tonguwTwister);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let camel = part1.slice(0,-1) + part1.slice(-1).toUpperCase();

let tail = part2.slice(0,-1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string

console.log(camel+tail);








/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let = tipAmount = billTotal * 0.15;
// Print out the tipAmount
console.log(tipAmount);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNumber = Math.floor(Math.random() * 10) + 1;



// Print the generated random number

console.log(randomNumber);  

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false eturns the first falsy value it encounters or the last value if none found, because // It’s passing values through.

const expression2 = a || b; // true , at least one of the opperators is true, so it returns true.

const expression3 = !a && b; // false , it negates a to false, then false && false is false.        

const expression4 = !(a && b); // true ! negates the result of a && b, which is false, so it becomes true.

const expression5 = !a || !b; // true , !a is false, !b is true, false || true is true.

const expression6 = !(a || b); // false , a || b is true, negating it gives false.

const expression7 = a && a; // true, both operands are true, so it returns the last operand.

