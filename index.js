/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const result = `${s1} ${s2} ${s3} ${s4} ${s5}`

console.log(result)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const result1 = part1.slice(0,-1) + part1.slice(-1).toUpperCase() 
const result2 = part2.slice(0,-1) + part2.slice(-1).toUpperCase() 


// Print the cameLtaiL-formatted string

console.log(result1 + result2)




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
tipsAmount = billTotal * (15/100)

// Calculate the tip (15% of the bill total)


// Print out the tipAmount

console.log(tipsAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

randomNumber =  Math.round(Math.random() * 11)
// Print the generated random number

console.log(randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

1 = false
2 = true
3 = false
4 = true
5 = true
6 = false
7 = true

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)

