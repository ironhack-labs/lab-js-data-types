/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log(tongueTwister);

// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let lastCharpart1 = part1.charAt(part1.length-1);
let capLastcharpart1 = lastCharpart1.toUpperCase();
let capLastpart1 = part1.substring(0,part1.length-1) + capLastcharpart1;

let lastCharpart2 = part2.charAt(part2.length-1);
let capLastcharpart2 = lastCharpart2.toUpperCase();
let capLastpart2 = part2.substring(0,part2.length-1) + capLastcharpart2;

let cameLtaiL;
cameLtaiL = `${capLastpart1}${capLastpart2}`;
console.log(cameLtaiL);
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;



// Calculate the tip (15% of the bill total)
tipAmount = billTotal + (billTotal* 15/100);

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function randomNum(min, max){
    const minCeiled = Math.ceil(min); // 1
    const maxFloored = Math.floor(max+1); 11
    return Math.floor(Math.random() * (maxFloored  - minCeiled) + minCeiled);
}

let randomNumber = randomNum(1,10);
console.log (randomNumber);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false
 console.log(expression1);

const expression2 = a || b;
//true
console.log(expression2);

const expression3 = !a && b;
// false
console.log(expression3);

const expression4 = !(a && b);
//true
console.log(expression4);

const expression5 = !a || !b;
// true
console.log(expression5);

const expression6 = !(a || b);
//false
console.log(expression6);

const expression7 = a && a;
//true
console.log(expression7);