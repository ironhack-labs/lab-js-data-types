/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = " Fred ";
const s2 = " fed ";
const s3 = " Ted ";
const s4 = " bread ";
const s5 = " and ";

// Concatenate the string variables into one new string
const tongueTwister = s1 + s2 + s3 + s4 + s5 + s3 + s2 + s1 + s4;
console.log(tongueTwister);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const result = part1 + part2;
console.log(result);



// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const percentage = billTotal * 15 / 100;

console.log(percentage);
// Print out the tipAmount

console.log(Math.random(10));

const randomNumber = 0.44663647094725967

console.log(randomNumber);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(expression1, b);
const expression2 = a || b;
console.log(expression2, a);
const expression3 = !a && b;
console.log(expression3, a); // no deberia ser lo opuesto?
const expression4 = !(a && b);
console.log(expression4, b);
const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;