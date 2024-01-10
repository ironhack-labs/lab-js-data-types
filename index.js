/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log(tongueTwister);
"Fred fed Ted bread and Ted fed Fred bread"
// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const result = part1 + part2.slice(0, -1) + part2.slice(-1).toUpperCase();
console.log(result);
javascripT
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount
console.log(tipAmount);
12.6


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
1-10
// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(expression1);
false
const expression2 = a || b;
console.log(expression2);
true
const expression3 = !a && b;
console.log(expression3);
false
const expression4 = !(a && b);
console.log(expression4);
true 
const expression5 = !a || !b;
console.log(expression5);
true
const expression6 = !(a || b);
console.log(expression6)
true // correct answer is false
const expression7 = a && a;
console.log(expression7)
true