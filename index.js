/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const result = s1 + s2 + s3 + s4 + s5;
// console.log(result); //"FredfedTedbreadand"

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";



const test1 = part1.slice(0, part1.length-1) + part1[part1.length - 1].toUpperCase();
const test2 = part2.slice(0, part2.length-1) + part2[part2.length - 1].toUpperCase();
const result2 = test1 + test2;

// console.log(test1); //javA
// console.log(test2); //scripT
// console.log(result2); //javAscripT


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tipAmount = billTotal * 0.15;

// console.log(tipAmount); //12.6


// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const smallestNum = Math.min(...arrayOfNums);
const biggestNum = Math.max(...arrayOfNums);
const randomNum = Math.random();
const randomIndex = Math.floor(Math.random() * arrayOfNums.length);

// console.log(randomIndex); // 3/2/4/5/5

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; // true

const expression3 = !a && b; // true >> false

const expression4 = !(a && b); // false >> true ? 

const expression5 = !a || !b; // true 

const expression6 = !(a || b); // true >> false

const expression7 = a && a; // true

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);