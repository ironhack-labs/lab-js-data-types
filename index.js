/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string

console.log(tongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

/* let javDown = "jav";
const = javDown.toLowerCase();
let aUp = "a";
const = aUp.toUpperCase();


let scripDown = "scrip";
const = scripDown.toLowerCase();
let tUp = "t";
const = tUp.toUpperCase();


const result = `${javDown}${aUp}${scripDown}${tUp}`; */


/* const part1Up = message.charAt(3); 
const part2Up = message.charAt(5);

const part1Down = part1.slice(0, 2);
const part2Down = part2.slice(0, 4);

const part1UpDown = `${part1Down}${part1Up}`;
const part2UpDown = `${part2Down}${part2Up}`;

const result = `${part1UpDown}${part2UpDown}`; */

// OR

/* let part1BeforeLast = part1.slice(0, part1.length-1);
let lastLetter1Uppercase = word.slice(-1).toUpperCase();
let part1WithUppercase = part1BeforeLast + lastLetter1Uppercase;

let part2BeforeLast = part2.slice(0, part2.length-1);
let lastLetter2Uppercase = word.slice(-1).toUpperCase();
let part2WithUppercase = part2BeforeLast + lastLetter2Uppercase;

const result = `${part1WithUppercase}${part2WithUppercase}`; */


// Print the cameLtaiL-formatted string

 // console.log(result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tip = 15/100;

const tipAmount = billTotal*tip;

// Print out the tipAmount

console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomCalc = Math.random() * 10;

const randomNumber = Math.round(randomCalc);

// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// False : because b is false.

const expression2 = a || b;
// True : because a is true.

const expression3 = !a && b;
// False : because both of them are false.

const expression4 = !(a && b);
// True : because the inside of the parenthesis is false, so the contrary is true. 

const expression5 = !a || !b;
// True : because, the second one is true. 

const expression6 = !(a || b);
// False : because, the inside of the parenthesis is true, so the contrary is false. 

const expression7 = a && a;
// True : because, a is true. 

// Print out each expression.

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);