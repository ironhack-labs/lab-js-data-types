/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
//"Fred fed Ted bread and Ted fed Fred bread".//
// Concatenate the string variables into one new string

let allNames = '';

allNames += s1;
allNames += ' ' + s2;
allNames += ' ' + s3;
allNames += ' ' + s4;
allNames += ' ' + s5;
allNames += ' ' + s3;
allNames += ' ' + s2;
allNames += ' ' + s1;
allNames += ' ' + s4;

// Print out the concatenated string

console.log(allNames);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastChatToUpperCase1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const lastCharToUpperCase2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const result = lastChatToUpperCase1 + lastCharToUpperCase2;

// Print the cameLtaiL-formatted string


console.log(result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tip = billTotal * 0.15

// Print out the tipAmount

console.log(tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random()*10 )+1;

// Print the generated random number

console.log(randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false 

const expression2 = a || b; // true 

const expression3 = !a && b; // true 

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); //false

const expression7 = a && a; // true 