/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let  cString = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}. Now say that 10 times fast!` 

// Print out the concatenated string
console.log(cString)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let modPart1 = part1.substring(0,3) + part1.charAt(3).toUpperCase()
let modPart2 = part2.substring(0,5) + part2.charAt(5).toUpperCase()
let camel = `${modPart1}${modPart2}`

// Print the cameLtaiL-formatted string
 console.log(camel)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
tipAmount = billTotal * 0.15

// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomInt = Math.random() *10
let randomNumber = Math.ceil(randomInt)

// Print the generated random number
console.log(randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(`My guess is false. The answer is ${expression1}.`)

const expression2 = a || b;
console.log(`My guess is true. The answer is ${expression2}.`)

const expression3 = !a && b;
console.log(`My guess is false. The answer is ${expression3}.`)

const expression4 = !(a && b);
console.log(`My guess is true. The answer is ${expression4}.`)

const expression5 = !a || !b;
console.log(`My guess is true. The answer is ${expression5}.`)

const expression6 = !(a || b);
console.log(`My guess is false. The answer is ${expression6}.`)

const expression7 = a && a;
console.log(`My guess is true. The answer is ${expression7}.`)