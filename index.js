/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
let tongueTwister = s1+' '+s2+' '+s3+' '+s4+' '+s5+' '+s3+' '+s2+' '+s1+' '+s4;

// Concatenate the string variables into one new string
console.log(tongueTwister);
console.log(typeof tongueTwister);
document.getElementById('demo').innerHTML = tongueTwister;

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let letterA = part1.slice(3);
let result = part1.slice(0,-1)+letterA.toUpperCase()+part2.slice(0,-1)+part2.slice(5).toUpperCase();


document.getElementById('demo1').innerHTML = result;
console.log(result);


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
let tipAmount = billTotal*0.15+'$';
console.log(tipAmount);
document.getElementById('demo2').innerHTML = tipAmount;


// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let numberRandom;
numberRandom =Math.floor(Math.random()*11)
console.log(numberRandom)
document.getElementById('demo2').innerHTML = numberRandom;


// Print the generated random number



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