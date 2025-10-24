/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const sT = s1 + " " + s2 + " "  + s3 + " " + s4  + " " + s5;
console.log(sT);

// Print out the concatenated string

//Fred fed Ted bread and. Ieration 1.1 completed


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const cameLtaiL = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();
console.log(cameLtaiL);

// Print the cameLtaiL-formatted string

//javAscripT. Iteration 1.2 completed



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
console.log(billTotal * 0.15);

// Print out the tipAmount

//12.6 Iteration 2.1 completed


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
 

// Print the generated random number
//4
//2
//8
//10
//8
//7
//5.  Iteration 2.2 completed


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //The "AND" operator
// False

const expression2 = a || b; //The "or" operator, opposite of operator "AND"
// True
const expression3 = !a && b; //The "NOT" (!) operator and the "AND" operator.
// False
const expression4 = !(a && b); 
// True
const expression5 = !a || !b;
// True
const expression6 = !(a || b);
// False
const expression7 = a && a;
// True

//Iteration 3.1 completed 