/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = s1 + s2 + s3 + s4 + s5

// Print out the concatenated string

// console.log(tongueTwister);
//console.log(`${s1} ${s2} ${s3} ${s4} ${s5}`);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
// Sliced the last letter and turn into uppercase.
const cameLtaiL1 = part1.slice(-1).toLocaleUpperCase();
const cameLtaiL2 = part2.slice(-1).toLocaleUpperCase();


// to remove the last letter from java and script
const cameLtaiLparT1 = part1.slice(0, -1) + cameLtaiL1;
const cameLtaiLparT2 = part2.slice(0, -1) + cameLtaiL2;

// to put them togerther
const result = cameLtaiLparT1 + cameLtaiLparT2;
// Print the cameLtaiL-formatted string

//console.log(cameLtaiL1 + cameLtaiL2); result AT 
//console.log(cameLtaiLparT1 + cameLtaiLparT2); result javAjavT
//console.log(result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;


// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount

//console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.ceil(Math.random() * 10)

// Print the generated random number

console.log(randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;