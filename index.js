/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let allConst
allConst += s1;
allConst += "" + s2;
allConst += "" + s3;
allConst += "" + s4;
allConst += "" + s5;

// Print out the concatenated string
console.log(allConst);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const nameFormated = part1[-1].toUpperCase() + part1.slice (-1, part1.lenght)
const nameFormated2 = part1[-1].toUpperCase() + part2.slice (-1, part2.lenght)
console.log(nameFormated + " " nameFormated2)

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;



// Calculate the tip (15% of the bill total)
const tipAmount;
tipAmount = billTotal + (billtotal * 0,15)

// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const NumberRandom
console.log(Math.random(0,11))

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; false

const expression2 = a || b; true

const expression3 = !a && b; true

const expression4 = !(a && b); true

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a; true