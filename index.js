/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4} `;
// Concatenate the string variables into one new string
console.log(tongueTwister);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
//javA


const upperJV = part1.slice(0,3)+ part1.slice(-1).toUpperCase();
console.log(upperJV);

const upperSt = part2.slice(0,6) + part2.slice(-1).toUpperCase();
 console.log(upperSt);

 const result = upperJV + upperSt;
 console.log(result);

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = (billTotal * 0.15);

const total = billTotal + tipAmount;
// Print out the tipAmount

console.log(`The bill was ${billTotal}, plus ${tipAmount} and the total is ${total}`);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor((Math.random() * 10) + 1);

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false
const expression2 = a || b;
// true
const expression3 = !a && b;
// true 
const expression4 = !(a && b);
// true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//false
const expression7 = a && a;
//true