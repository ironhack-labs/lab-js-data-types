/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let result11 = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
// Print out the concatenated string
console.log(result11);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
upperPart1 = part1.slice(0, -1) + part1[3].toUpperCase();
upperPart2 = part2.slice(0, -1) + part2[5].toUpperCase();

// Print the cameLtaiL-formatted string
console.log(upperPart1 + upperPart2);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * 0.15;
// Print out the tipAmount
console.log(tip);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
result22 = Math.random() * (11 - 1) + 1;
// Print the generated random number
console.log(Math.floor(result22));
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false;
console.log("expression 1", expression1);
const expression2 = a || b;
//true;
console.log("expression 2", expression2);
const expression3 = !a && b;
//false;
console.log("expression 3", expression3);
const expression4 = !(a && b);
//true;
console.log("expression 4", expression4);
const expression5 = !a || !b;
//true;
console.log("expression 5", expression5);
const expression6 = !(a || b);
//false;
console.log("expression 6", expression6);
const expression7 = a && a;
//true;
console.log("expression 7", expression7);
