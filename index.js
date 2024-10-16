/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s1} ${s4};`

console.log(tongueTwister)

// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1LastChar = part1.substring(part1.length - 1, part1.length);
const part2LastChar = part2.substring(part2.length - 1, part2.length);
const result = part1.slice(0, -1) + part1LastChar.toUpperCase() + part2.slice(0, -1) + part2LastChar.toUpperCase()
console.log(result)

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = billTotal * 15 / 100
// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
randomNumber = (Math.random() * 10) + 1

// Print the generated random number

console.log(randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// False
const expression2 = a || b;
// True
const expression3 = !a && b;
// False
const expression4 = !(a && b);
// True
const expression5 = !a || !b;
// True
const expression6 = !(a || b);
// False
const expression7 = a && a;
// True