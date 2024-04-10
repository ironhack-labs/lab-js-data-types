/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

console.log(s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const part1camel = part1.substring(0, part1.length - 1);
const camelCase1 = part1[part1.length - 1].toUpperCase();

const part1Final1 = part1camel + camelCase1;

const part2camel = part2.substring(0, part1.length - 1);
const camelCase2 = part2[part1.length - 1].toUpperCase();

const part1Final2 = part2camel + camelCase2;


console.log(`${part1Final1}${part1Final2}`);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
//const billTotal = 84;


// Calculate the tip (15% of the bill total)


// Print out the tipAmount
const billTotal = 84;

let tipAmount = billTotal * 0.15;

console.log(tipAmount);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.round(Math.random() * (10 - 1) + 1);
console.log(randomNumber);
// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false 

const expression2 = a || b; // false x

const expression3 = !a && b; //false 

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true 

const expression6 = !(a || b); //true x

const expression7 = a && a; // true-

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);