/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = (`${s1}, ${s2}, ${s3}, ${s4}, ${s5}`)

// Print out the concatenated string

console.log (tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
 let lastCharUpperCasePart1 = part1[3].toUpperCase()
let lastCharUpperCasePart2 = part2[5].toUpperCase()

let CharCombined1 = part1.slice(0,3) + lastCharUpperCasePart1 
let CharCombined2 = part2.slice(0,5) + lastCharUpperCasePart2 

console.log(part1)
console.log(part2)

console.log (lastCharUpperCasePart1)
console.log (lastCharUpperCasePart2)

// Print the cameLtaiL-formatted string

let camelTaiL = CharCombined1 + CharCombined2
console.log (camelTaiL)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

let tipTotal = billTotal*15/100

// Print out the tipAmount
console.log (tipTotal)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number

console.log (Math.random (10)+1)
console.log (Math.round(10))

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false
const expression2 = a || b;
true
const expression3 = !a && b;
false
const expression4 = !(a && b);
true
const expression5 = !a || !b;
false
const expression6 = !(a || b);
false
const expression7 = a && a;
true