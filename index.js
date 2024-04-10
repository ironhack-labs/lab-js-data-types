/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister= s1+" "+s2+" "+s3+" "+s4+" "+s5+" "+s3+" "+s2+" "+s1+" "+s4;

console.log(tongueTwister);

// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let last1=part1[part1.length-1].toUpperCase();
let part1C=part1.slice(0,-1)+last1;
let last2=part2[part2.length-1].toUpperCase();
let part2C=part2.slice(0,-1)+last2;

console.log(part1C+part2C);

//console.log(`${part1Upper} ${part2Upper}`);

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount=billTotal*0.15;

console.log(tipAmount);

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let random=(Math.random()*10)+1
let randomNumber=Math.floor(random);
// Print the generated random number

console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(false);
console.log(a && b);
const expression2 = a || b;
console.log(true);
console.log(a || b);
const expression3 = !a && b;
console.log(false);
console.log(!a && b);
const expression4 = !(a && b);
console.log(true);
console.log(!(a && b));
const expression5 = !a || !b;
console.log(true);
console.log(!a || !b);
const expression6 = !(a || b);
console.log(false);
console.log(!(a || b));
const expression7 = a && a;
console.log(true);
console.log(a && a);