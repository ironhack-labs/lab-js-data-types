/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


let tongueTwister = (`${s1}, ${s2}, ${s3}, ${s5},${s3},${s2},${s1},${s4}`)

console.log (tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let cap1 = part1[3].toUpperCase();
let cap2 = part2 [5].toUpperCase();
let body1 = part1.slice(0,3) ;
let body2 = part2.slice(0,5);
console.log (`${cap1}${body1}${body2}${cap2}`);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

let calculation = (15 / 100) 
let tipAmount = calculation * 84
console.log (tipAmount)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


let randomNumber = Math.ceil(Math.random (1,10))

console.log (randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; false

const expression2 = a || b; true

const expression3 = !a && b;false

const expression4 = !(a && b);true

const expression5 = !a || !b;true

const expression6 = !(a || b);false

const expression7 = a && a;true