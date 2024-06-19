/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister = (`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`)

// Print out the concatenated string

console.log(tongueTwister)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
let part1 = "java";
let part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let nueva = part2.slice(-1)
let ultimaletra2 = nueva.toUpperCase()

let nueva1 = part1.slice(-1)
let ultimaletra1 = nueva1.toUpperCase()

let resto = part1.slice(0,3)

let resto2 = part2.slice(0,5)

part1 =(resto+ultimaletra1)

part2 =(resto2+ultimaletra2)

let result = (part1+part2)


// Print the cameLtaiL-formatted string

console.log(result)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipAmount = ((billTotal*15)/100)

// Print out the tipAmount

onsole.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

let minimo = 1
let maximo = 10

// Print the generated random number

console.log(randomNumber)

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