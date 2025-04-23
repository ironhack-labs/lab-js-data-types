/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let newString = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string
console.log(newString)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastLetter1 = part1.slice(0, part1.length - 1) + part1[part1.length - 1].toUpperCase()
console.log(lastLetter1)

const lastLetter2 = part2.slice(0, part2.length - 1) + part2[part2.length - 1].toUpperCase()
console.log(lastLetter2)

const result = lastLetter1 + lastLetter2
// Print the cameLtaiL-formatted string
console.log(result)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 1.15

// Print out the tipAmount
console.log(tipAmount)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.round(Math.random() * 10)

// Print the generated random number
console.log(randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false ok
const expression2 = a || b;
// true ok 
const expression3 = !a && b;
// false ok
const expression4 = !(a && b);
// true  no
const expression5 = !a || !b;
// true ok
const expression6 = !(a || b);
// false ok
const expression7 = a && a;
// true ok 
console.log(a && a)