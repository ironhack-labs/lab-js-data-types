/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


// Print out the concatenated string

console.log(`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1cameL = part1.slice(0,-1) + part1.slice(-1).toUpperCase();

const part2cameL = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const result = `${part1cameL}${part2cameL} `

// Print the cameLtaiL-formatted string


console.log(result)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = (billTotal * 0.15)


// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNumber = Math.floor((Math.random()*10)+1)

// Print the generated random number

console.log(randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

// expression1= false

const expression2 = a || b;

// expression2 = true

const expression3 = !a && b;

// expression3 = false

const expression4 = !(a && b);

// expression4 = true

const expression5 = !a || !b;

// expression5 = true

const expression6 = !(a || b);

// expression6 = false

const expression7 = a && a;

//expression7 = true

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);