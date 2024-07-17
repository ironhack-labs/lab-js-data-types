/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
let total = "";

total += s1 +''+ s2 + ''+s3+''+s4+''+s5
console.log(total)



// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
let partOne = part1.cameLtaiL;
let partTwo = part2.cameLtaiL;

result = partOne + partTwo;
console.log(result);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/


// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number
let billTotal = 84;

tipAmount = billTotal / 100 * 15;
console.log(tipAmount);
console.log( billTotal+ tipAmount)
           


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// tip ------false
 console.log(expression1);

const expression2 = a || b;
// tip ------true
console.log(expression2);

const expression3 = !a && b;
// tip ------true--- false and false is false??????????, because it unequals true?
console.log(expression3);

const expression4 = !(a && b);
// tip ------false
 console.log(expression3);

const expression5 = !a || !b;
// tip ------false??????????, because it unequals true?
// console.log(expression);

const expression6 = !(a || b);
// tip ------true------false??????????, because it unequals true?
console.log(expression6);

const expression7 = a && a;
// tip ------true, because it unequals true?
(expression6);