/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const phrase = (`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`);
// Print out the concatenated string

console.log(phrase);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const firstPart= part1.slice(3)
const unCamelCase1 =   part1.slice(0, 3) + firstPart.toLocaleUpperCase();

const secondPart= part2.slice(5)
const unCamelCase2 =   part2.slice(0, 5) + secondPart.toLocaleUpperCase();

 //Print the cameLtaiL-formatted string

console.log(unCamelCase1 + unCamelCase2)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = 15;
const tipAmount = (billTotal * (tip / 100));


// Print out the tipAmount

console.log(tipAmount); // 12.6


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number
console.log(Math.random() * 10)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false OK
console.log(expression1)
const expression2 = a || b;
//true OK
console.log(expression2)
const expression3 = !a && b;
//true X
console.log(expression3) 
const expression4 = !(a && b);
//true OK
console.log(expression4)
const expression5 = !a || !b;
//false X
console.log(expression5)
const expression6 = !(a || b);
//false OK
console.log(expression6)
const expression7 = a && a;
//true OK
console.log(expression7)