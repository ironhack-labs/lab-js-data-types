/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tonguetwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string

console.log(tonguetwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1Initial = part1.slice(0, -1);
const part2Initial = part2.slice(0, -1);

const part1LastUpperCase = part1.charAt(part1.length - 1).toUpperCase();
const part2LastUpperCase = part2.charAt(part2.length - 1).toUpperCase();

const result = `${part1Initial}${part1LastUpperCase}${part2Initial}${part2LastUpperCase}`;

// Print the cameLtaiL-formatted string

console.log(result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
tipAmmount = 84*0.15;

// Print out the tipAmount
console.log(tipAmmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
// we scale the ganarated floating point (which ranges from 0-1) and we shift it with 1. 
// since it can't have values bigger than 1. or we could just .ceil() it and done :D
const randomNumber = Math.floor(Math.random() *10)  +1 ;

// Print the generated random number
console.log(randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false because b is false.

const expression2 = a || b; // true because a is true.

const expression3 = !a && b; // false because !a is false and b is false.

const expression4 = !(a && b); // true because a && b is false, and !false is true.

const expression5 = !a || !b;// true because !b is true.

const expression6 = !(a || b); // false because a || b is true, and !true is false.

const expression7 = a && a;// true because both operands are true.


console.log("Expression 1:", expression1); // false
console.log("Expression 2:", expression2); // true
console.log("Expression 3:", expression3); // false
console.log("Expression 4:", expression4); // true
console.log("Expression 5:", expression5); // true
console.log("Expression 6:", expression6); // false
console.log("Expression 7:", expression7); // true