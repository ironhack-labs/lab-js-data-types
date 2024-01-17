/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = (`${s1} ${s2} ${s3} ${s4} ${s5}`);
console.log(tongueTwister)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const java= `${part1[0].toUpperCase()}${part1.slice(1)}`
console.log(java)
const script= part2[5].toUpperCase()
console.log(script)
const script2= `${part2[0].toUpperCase()}${part2.slice(1,5)}`
console.log(script2)
const result = `${java}${script2}${script}`
console.log(result)






// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

// Calculate the tip (15% of the bill total)


// Print out the tipAmount

const billTotal = 84
const tipAmount = billTotal*0.15
console.log(tipAmount)

const randomNumber = Math.round(Math.random()*10)
console.log(randomNumber)


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

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

console.log (expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)
