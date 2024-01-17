/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


const all = s1 + s2 + s3 + s4 + s5;
console.log(all)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

/* Convert the last letter of part1 and part2 to uppercase and concatenate the strings 
Create a new variable named result by concatenating the strings part1 and part2, and converting their last letters to uppercase to form a new "cameLtaiL" formatted string: "javAscripT"

Once done, print out the result string using console.log().*/


var newpart1 = part1[3].toUpperCase();
var newpart2 = part2[0].toUpperCase();

var result = part1 + newpart1 + part2 + newpart2 
console.log(result)

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const newTotal = (15 / (Math.round(billTotal)) * 100)

// Print out the tipAmount
console.log(newTotal)





/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

var randomNum = Math.floor(Math.random() * 100) + 1;

// Print the generated random number

console.log(randomNum)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//F
console.log(expression1)

const expression2 = a || b;
//T
console.log(expression2)

const expression3 = !a && b;
//T
console.log(expression3)
const expression4 = !(a && b);
//F
console.log(expression4)
const expression5 = !a || !b;
//T
console.log(expression5)
const expression6 = !(a || b);
//F
console.log(expression6)
const expression7 = a && a;
console.log(expression7)
//T