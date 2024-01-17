/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = s1+" "+s2+" "+s3+" "+s4+" "+s5+" "+s3+" "+s2+" "+s1+" "+s4

console.log(tongueTwister)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";


let letterPart1 = part1.slice(3).toUpperCase()
let letterPart2 = part2.slice(5).toUpperCase()

const result = part1.slice(0, 3) + letterPart1 + part2.slice(0, 5) + letterPart2;

console.log(result)


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

let tipPercent = 0.15;

const tipAmount = billTotal*tipPercent

console.log(tipAmount)

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number


const randomNumber = Math.floor(Math.random() * 10) +1;

console.log(randomNumber)
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
