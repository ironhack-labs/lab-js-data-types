/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let fredFirst = "";
fredFirst += s1 + " ";  
fredFirst += s2 + " ";  
fredFirst += s3 + " ";  
fredFirst += s4 + " "; 
fredFirst += s5;  

let tedFirst = "";
tedFirst += s3 + " ";  
tedFirst += s2 + " ";  
tedFirst += s1 + " ";  
tedFirst += s4;  


// Print out the concatenated string

console.log (`${fredFirst} ${tedFirst}`);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1Uppercase = part1[3].toUpperCase();

const formatedPart1 = part1.slice(0,3) + part1Uppercase;

const part2Uppercase = part2[5].toUpperCase();

const formatedPart2 = part2.slice(0,5) + part2Uppercase;

let concatenated = "";
    concatenated += `${formatedPart1} `;
    concatenated += `${formatedPart2}`;


// Print the cameLtaiL-formatted string
console.log (concatenated);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * (15 / 100);

// Print out the tipAmount

console.log (tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.round(Math.random()*10);

// Print the generated random number
console.log (randomNumber);



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //false

const expression7 = a && a; //true