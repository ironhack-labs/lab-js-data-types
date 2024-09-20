/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let newString = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;



// Print out the concatenated string
console.log(newString);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let toUpperCasePart1 = part1[0].toUpperCase();
let toUpperCasePart2 = part2[0].toUpperCase();

let newName1 = toUpperCasePart1 + part1.slice(1);
let newName2 = toUpperCasePart2 + part2.slice(1);

let newName = newName1 + newName2;
// Print the cameLtaiL-formatted string
console.log(newName);






/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = 15;
let tipAmount = (billTotal * tip) / 100;
// Print out the tipAmount
console.log(tipAmount);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.random() * 10;



// Print the generated random number
console.log(Math.round(randomNumber));


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // false

const expression5 = !a || !b; // true

const expression6 = !(a || b); // false

const expression7 = a && a; // true