/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const newString = s1 + s2 + s3 + s4 + s5;


// Print out the concatenated string
console.log(newString);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part3 = part1.substring(0, part1.length -1) + part1.slice(-1).toUpperCase() + part2.substring(0, part2.length -1) + part2.slice(-1).toUpperCase()  





// Print the cameLtaiL-formatted string
console.log(part3)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * 0.15

// Print out the tipAmount
console.log(tip)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumb = Math.round(Math.random() * 10);
     

// Print the generated random number
console.log(randomNumb)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(false)
console.log(expression1)
const expression2 = a || b;
console.log(true)
console.log(expression2)
const expression3 = !a && b;
console.log(false)
console.log(expression3)
const expression4 = !(a && b);
console.log(true)
console.log(expression4)
const expression5 = !a || !b;
console.log(true)
console.log(expression5)
const expression6 = !(a || b);
console.log(false)
console.log(expression6)
const expression7 = a && a;
console.log(true)
console.log(expression7)