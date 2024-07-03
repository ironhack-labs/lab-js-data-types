/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`
const tongueTwisterOption2 = s2 + " " + s2 + " " + s3 + " " + s4 + " " + s5

// Print out the concatenated string
console.log(tongueTwister)
console.log(tongueTwisterOption2)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
//const result = part1 - missLastLetter
const part1FisrtLetters = part1.slice(0, -1)
const part1LastLetter = part1.slice(-1).toUpperCase()
const part2FirstLetters = part2.slice(0, -1)
const part2LastLetter = part2.slice(-1).toUpperCase()

// Print the cameLtaiL-formatted string
console.log(part1FisrtLetters + part1LastLetter + part2FirstLetters + part2LastLetter)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = (billTotal * 15) / 100

// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.random() * 10
const roundedNumber = Math.round(randomNumber)

// Print the generated random number
console.log(roundedNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false

const expression2 = a || b;
//true

const expression3 = !a && b;
//false

const expression4 = !(a && b);
//true

const expression5 = !a || !b;
//true

const expression6 = !(a || b);
//false

const expression7 = a && a;
//true

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)