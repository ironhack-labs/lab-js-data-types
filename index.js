/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
console.log(`${s1},${s2},${s3},${s4},${s5} and Ted fed Fred bread `)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const newpart1= part1.slice(0,3) + part1.slice(-1).toUpperCase()
const newpart2= part2.slice(0,5) + part2.slice(-1).toUpperCase()
console.log(newpart1+newpart2)
// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip= billTotal * 0.15
console.log(tip)

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomN= Math.random()
const newrandomN= randomN * 10
console.log(newrandomN)

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
answer: false 
console.log(expression1)

const expression2 = a || b;
answer: true
console.log(expression2)

const expression3 = !a && b;
answer: false
console.log(expression3)

const expression4 = !(a && b);
answer: true
console.log(expression4)
const expression5 = !a || !b;
answer:true
console.log(expression5)

const expression6 = !(a || b);
/*answer:false*/
console.log(expression6)

const expression7 = a && a;
/*answer:true*/
console.log(expression7)