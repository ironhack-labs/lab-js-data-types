/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let newString = s1+s2+s3+s4+s5;

// Print out the concatenated string
console.log(newString)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const result = part1.slice(0, -1) + part1.slice(-1).toUpperCase() +
               part2.slice(0, -1) + part2.slice(-1).toUpperCase();




// Print the cameLtaiL-formatted string

console.log(result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

// Calculate the tip (15% of the bill total)
const billTotal = 84;
const percentage = 15;
let tip = (percentage/100)*billTotal

// Print out the tipAmount
console.log(tip)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/


// reference: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// Generate a random integer between 1 and 10 (inclusive)
randomNumber = ((Math.random()*10)+1)
// Print the generated random number
console.log(randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // ==> output: false

const expression2 = a || b; // ==> output: true

const expression3 = !a && b; // ==> output: true 

const expression4 = !(a && b); // ==> output: true

const expression5 = !a || !b; // ==> output: true 

const expression6 = !(a || b); // ==> output: false

const expression7 = a && a; // ==> output: true