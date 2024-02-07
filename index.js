/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`
console.log(tongueTwister)

// Print out the concatenated string

// Result: Fred fed Ted bread and Ted fed Fred bread


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1 = "java";
const part2 = "script";
const p1length = part1.length;
const p2length = part2.length;
const p1lastletter = part1[p1length - 1].toUpperCase();
const p2lastletter = part2[p2length - 1].toUpperCase();
const newword = part1.slice(0, p1length -1) + p1lastletter + part2.slice(0, p2length -1) + p2lastletter;


console.log(newword);

// Print the cameLtaiL-formatted string

javAscripT


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const billTip = (billTotal * 15) / 100;
console.log(billTip);

// Print out the tipAmount
12.6



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const radondomNumber = Math.floor(Math.random() * 10) + 1;
console.log(radondomNumber);



// Print the generated random number
7


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