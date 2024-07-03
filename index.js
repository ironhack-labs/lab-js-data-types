/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister = "";

tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;


// Print out the concatenated string
console.log(tongueTwister)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let upper1 = ""
let upper2 = ""


// Print the cameLtaiL-formatted string

let sub1 = part1.slice(-1)
let sub2 = part2.slice(-1)

upper1 = sub1.toUpperCase()
upper2 = sub2.toUpperCase()

const final = part1 + upper1 + part1 + upper2;


console.log(final)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
let tipAmount = "";
// Calculate the tip (15% of the bill total)
tipAmount = (billTotal * 15) / 100

// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(`1)answer is false, the correct answer is ${expression1}`)
const expression2 = a || b;
console.log(`2)answer is true, the correct answer is ${expression2}`)
const expression3 = !a && b;
console.log(`3)answer is false, the correct answer is ${expression3}`)
const expression4 = !(a && b);
console.log(`4)answer is true, the correct answer is ${expression4}`)
const expression5 = !a || !b;
console.log(`5)answer is true, the correct answer is ${expression5}`)
const expression6 = !(a || b);
console.log(`6)answer is false, the correct answer is ${expression6}`)
const expression7 = a && a;
console.log(`7)answer is true, the correct answer is ${expression7}`)