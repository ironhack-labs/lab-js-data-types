/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


// Print out the concatenated string

console.log("***********Iteration 1.1:***********" )
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`
console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
console.log("***********Iteration 1.2:***********")
const part1LastUpperCased = part1.slice(-1).toUpperCase(); 
const part2LastUpperCased = part2.slice(-1).toUpperCase();
console.log(part1LastUpperCased);
console.log(part2LastUpperCased);
const result = part1.slice(0,-1) + part1LastUpperCased + part2.slice(0,-1)+ part2LastUpperCased;
console.log(result);

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
console.log("***********Iteration 2.1:***********")
const tipAmount = billTotal * 0.15; 
console.log("Tip amount:" + tipAmount)
const totalAmount = billTotal+tipAmount;
console.log("Total amount(Tip inculuded):" + totalAmount )

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
console.log("***********Iteration 2.2:***********")

const randomNumber = Math.floor(Math.random()*11);


// Print the generated random number
console.log("Random number:" + randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; false

const expression2 = a || b; true

const expression3 = !a && b; true

const expression4 = !(a && b); true

const expression5 = !a || !b;  false

const expression6 = !(a || b); true

const expression7 = a && a; true 