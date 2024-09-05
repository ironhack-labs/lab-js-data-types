/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const Sun=s1+" "+ s2+" "+s3+" "+s4+" "+s5+" "+s3+" "+s2+" "+s1+" "+s4
// Concatenate the string variables into one new string
console.log(Sun)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const part1WithUpperCaseLast = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const part2WithUpperCaseLast = part2.slice(0, -1) + part2.slice(-1).toUpperCase();
const result = part1WithUpperCaseLast + part2WithUpperCaseLast;
console.log(result);


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;


// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;
// Print out the tipAmount
console.log(tipAmount);
// Calculate the tip (15% of the bill total)


// Print out the tipAmount




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

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;