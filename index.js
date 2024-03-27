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
const lowChar1 = part1.slice(0, 3);
const lastChar1 = part1.slice(-1);
const lastinUpper1 = lastChar1.toUpperCase();
const done1 = lowChar1 + lastinUpper1;

const lowChar2 = part2.slice(0, 5);
const lastChar2 = part2.slice(-1);
const lastinUpper2 = lastChar2.toUpperCase();
const done2 = lowChar2 + lastinUpper2;

const camelTail = done1 + done2;

// Print the cameLtaiL-formatted string
console.log(camelTail);
/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function calculateTip(num) {
  return (num += (num / 100) * 15);
}
// Print out the tipAmount
console.log(calculateTip(billTotal));
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Print the generated random number
console.log(getRandomNum(1, 10));
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// => false -> right
console.log(expression1);

const expression2 = a || b;
// => true -> right
console.log(expression2);

const expression3 = !a && b;
// => true -> wrong, it's false
console.log(expression3);

const expression4 = !(a && b);
// => true -> right
console.log(expression4);

const expression5 = !a || !b;
// => true -> right
console.log(expression5);

const expression6 = !(a || b);
// => false -> right
console.log(expression6);

const expression7 = a && a;
// => true -> right
console.log(expression7);
