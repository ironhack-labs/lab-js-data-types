/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
function concatenate() {
    return `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`
}


// Print out the concatenated string
console.log(concatenate());



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
function concatenateAndUpperCase() {
  const modifiedPart1  = part1.slice(0, part1.length -1) + part1[part1.length -1].toUpperCase();
  const modifiedPart2  = part2.slice(0, part2.length -1) + part2[part2.length -1].toUpperCase();
  const result = modifiedPart1 + modifiedPart2;
  return result;
}

// Print the cameLtaiL-formatted string
console.log(concatenateAndUpperCase())



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function calculateTip() {
    tip = (billTotal / 100 ) * 15;
    return tip;
}

// Print out the tipAmount
console.log(calculateTip())



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function  generateNumber() {
    const number = Math.ceil(Math.random() * 10);
    return number;
}

// Print the generated random number
console.log(generateNumber());


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

console.log(expression1); //false
console.log(expression2); //true
console.log(expression3); //false
console.log(expression4); //true
console.log(expression5); //true
console.log(expression6); //false
console.log(expression7); //true