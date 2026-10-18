/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const combinedWords = s1 +" " +s5 +" " + s3 +" " + s2 +" " + s4;
const differentWords= s1.concat(" ", s5, " ", s3, " ", s2, " ", s4, " ",);
//adding empty quotes to get space between strings
// using , comma to seperate argument
// .concat helps to join the strings together




// Print out the concatenated string
console.log(combinedWords);
console.log(differentWords);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const newData = part1.slice(0, -1) + part1.slice(-1).toUpperCase()
const oldData = part2.slice(0, -1) + part2.slice(-1).toUpperCase()
//.slice(0, -1) to leave all except the last one, so the first .slice() leaves only "jav" and second .slice() takes the last "A"
//.slice(-1) to get the last one , so the first .slice() leaves only  "scrip" and second .slice() takes the last "T"
const part3 = newData + oldData;


// Print the cameLtaiL-formatted string
console.log(part3);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tipAmount = 15 / 100 * billTotal
// used direct calcualtion method 15 divided by 100 times 84

// Calculate the tip (15% of the bill total)


// Print out the tipAmount
//console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


//math.random() to generate number
//math.floor() to round up the number
// * 10 + 1 to make the rsult integer from 1 to 10
let num1 = Math.random() * 10;
let num2 = Math.floor(num1) + 1;



const randomNumber = Math.floor(Math.random() * 10) + 1;

// Print the generated random number

console.log(randomNumber)
console.log(num2);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(expression1);

const expression2 = a || b;
console.log(expression2);

const expression3 = !a && b;
console.log(expression3);

const expression4 = !(a && b);
console.log(expression4);

const expression5 = !a || !b;
console.log(expression5);

const expression6 = !(a || b);
console.log(expression6);

const expression7 = a && a;
console.log(expression7);

const expression8 = !a && !b;
console.log(expression8);

const expression9 = b && a;
console.log(expression9);

const expression10 = b || a;
console.log(expression10);

