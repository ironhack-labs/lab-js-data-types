/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`
console.log(tongueTwister);

// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let lastCapitalized1 = part1.slice(0, 3) + part1.charAt(3).toUpperCase();
let lastCapitalized2 = part2.slice(0, 5) + part2.charAt(5).toUpperCase();

// Print the cameLtaiL-formatted string
let formatted = lastCapitalized1 + lastCapitalized2
console.log(formatted)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 15 / 100;

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNum = Math.round(Math.random() * 10);

// Print the generated random number

console.log(randomNum);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//FALSE
console.log(expression1);
const expression2 = a || b;
//TRUE
console.log(expression2);
const expression3 = !a && b;
//FALSE
console.log(expression3);
const expression4 = !(a && b);
//TRUE
console.log(expression4);
const expression5 = !a || !b;
//TRUE
console.log(expression5);
const expression6 = !(a || b);
//FALSE
console.log(expression6);
const expression7 = a && a;
//TRUE
console.log(expression7);