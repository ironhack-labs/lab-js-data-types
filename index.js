/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
// Fred fed Ted bread and Ted fed Fred bread
// Concatenate the string variables into one new string
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

// Print out the concatenated string
console.log(tongueTwister);


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
console.log(part1.length); // 4
console.log(part2.length); // 6
const upperCased1 = part1.slice(0, 3) + part1.slice(-1).toUpperCase();
const upperCased2 = part2.slice(0, 5) + part2.slice(-1).toUpperCase();
const result = upperCased1 + upperCased2;


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tipAmount = 15;

const tiptotal = (billTotal * tipAmount) / 100;

console.log(tiptotal);

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
const randomNumber = (Math.floor((Math.random() * 10) +1));

console.log(randomNumber);
// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // true

const expression2 = a || b;// true

const expression3 = !a && b;// false

const expression4 = !(a && b);// true

const expression5 = !a || !b;// false

const expression6 = !(a || b); // true

const expression7 = a && a;// false