/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 ;
console.log(tongueTwister);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastLetterP1 = part1.charAt(part1.length-1);
const lastLetterP2 = part2.charAt(part2.length-1);
const resultP1 =  part1.slice(0, -1) + lastLetterP1.toUpperCase();
const resultP2 =  part2.slice(0, -1) + lastLetterP2.toUpperCase();

// Print the cameLtaiL-formatted string

console.log(resultP1)
console.log(resultP2)
result =  resultP1 + resultP2;
console.log(result)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
tipAmount = 0.15 * 84; 

// Print out the tipAmount
console.log(tipAmount);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.random() * 10;

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false
const expression2 = a || b;
true
const expression3 = !a && b;
false
const expression4 = !(a && b);
true
const expression5 = !a || !b;
true
const expression6 = !(a || b);
false
const expression7 = a && a;
true
console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)
