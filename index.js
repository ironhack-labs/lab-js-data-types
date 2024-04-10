/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
let s6 = " "
let tongueTwister = s1+s6+s2+s6+s3+s6+s4+s6+s5+s6+s3+s6+s2+s6+s1+s6+s4
console.log(tongueTwister);

// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
let camelTailPart1 = part1.toUpperCase();
let camelTailPart2 = part2.toUpperCase();
let result = part1.slice(0, 3)+camelTailPart1.slice(3,4)+part2.slice(0,5)+camelTailPart2.slice(5,6);

//console.log(part1.length-1); //3 JAV
//console.log(part2.length-1); //5 SCRIP

//camelTailPart1 = part1.toUpperCase();
console.log(camelTailPart1)

//camelTailPart1= part2.toUpperCase();
console.log(camelTailPart2)


console.log(result);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

// Calculate the tip (15% of the bill total)


// Print out the tipAmount

const billTotal = 84;
let tipAmount = billTotal*15/100;
console.log(`The tip of ${billTotal} is ${tipAmount}$.`)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

// Print the generated random number

let randomNumber = 1 + Math.random()*10
console.log(Math.round(randomNumber));

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

//ANSWERS
console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)