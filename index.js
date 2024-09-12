/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongerTwister = ` ${s1} ${s2} ${s3} ${s4} ${s5} `
console.log(tongerTwister)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
/*
console.log(`${part1} ${part2}`)


const part1Formatted = part1[0].toUpperCase() + part1.slice(1, part1.length)
console.log(part1Formatted)

const part2Formatted = part2[0].toUpperCase() + part2.slice(1, part2.length)
console.log(part2Formatted)
// Print the cameLtaiL-formatted string

console.log(`${part1Formatted} ${part2Formatted}`)
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
*/

const result = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toLocaleUpperCase()

console.log(result)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

const billTotal = 84;

/*
// Calculate the tip (15% of the bill total)
if (billTotal) {
    billTotal.discountPercentage = 15;
}

billTotal += billTotal.discountPercentage * (billTotal.discountPercentage / 100)

// Print out the tipAmount

console.log(billTotal)
*/

const tipAmount = 0.15 * billTotal
console.log(tipAmount)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const roundNumber = Math.floor(Math.random() * 10) + 1

// Print the generated random number

console.log(roundNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(a && b)  // True
const expression2 = a || b;
console.log(a || b) // False
const expression3 = !a && b;
console.log(a && b) // Fasle
const expression4 = !(a && b);
console.log(!(a && b)) // true
const expression5 = !a || !b;
console.log(!a || !b) // True
const expression6 = !(a || b);
console.log(!(a || b))  // True
const expression7 = a && a;
console.log(a && a) // True

