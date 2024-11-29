/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const newString = s1 + " "+ s2+ " " +s3 + " "+ s4 + " " + s5 ;
// Print out the concatenated string
console.log(newString);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const lastLetter1 =  part1.length -1;
const lastLetter2 = part2.length -1;
const firstPart = part1.slice(0,lastLetter1) + part1.charAt(lastLetter1).toUpperCase();
const secondPart = part2.slice(0,lastLetter2) + part2.charAt(lastLetter2).toUpperCase();
// Print the cameLtaiL-formatted string
const formattedStrings = console.log(firstPart + secondPart);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipBill = billTotal -(billTotal *15)/100;
console.log(tipBill);

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const secondNum =10;
const firstNum = 1;
const randomNumber = Math.floor(Math.random() * (secondNum-firstNum +1)) + firstNum;

// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false
console.log(expression1);

const expression2 = a || b; //true
console.log(expression2);

const expression3 = !a && b; //false
console.log(expression3);

const expression4 = !(a && b);//true
console.log(expression4);


const expression5 = !a || !b;//true
console.log(expression5);

const expression6 = !(a || b); //false
console.log(expression6);

const expression = a && a; //true

console.log(expression);