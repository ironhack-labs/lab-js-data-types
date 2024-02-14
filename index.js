/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let part1UpperCase = part1.slice(0, 3) + part1[3].toUpperCase();

let part2UpperCase = part2.slice(0, 5) + part2[5].toUpperCase();

// Print the cameLtaiL-formatted string
console.log(part1UpperCase + part2UpperCase);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipAmount = 0.15 * billTotal;

// Print out the tipAmount

console.log(tipAmount, '$');


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random()* 10) + 1;

// Print the generated random number

console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false
const expression2 = a || b;
//true
const expression3 = !a && b;
//false
const expression4 = !(a && b);
//true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//true why not true ? At least one of them is true because thanks to !() a=false and b=true right ? test
const expression7 = a && a;
//true

console.log('1 =', expression1);
console.log('2 =', expression2);
console.log('3 =', expression3);
console.log('4 =', expression4);
console.log('5 =', expression5);
console.log('6 =', expression6);
console.log('7 =', expression7);