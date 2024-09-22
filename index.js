/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const result11 = `${s1} ${s2} ${s3} ${s4} ${s5}`;

// Print out the concatenated string
console.log(result11);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const newPart1 = part1[part1.length - 1].toUpperCase();
const newPart2 = part2[part2.length - 1].toUpperCase();
const result12 = newPart1 + newPart2;

// Print the cameLtaiL-formatted string
console.log(result12)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const result21 = billTotal * 0.15;

// Print out the tipAmount
console.log(result21);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const result22 = Math.floor(Math.random() * 10 + 1);

// Print the generated random number
console.log(result22);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;//false

const expression2 = a || b;//true

const expression3 = !a && b;//false

const expression4 = !(a && b);//true

const expression5 = !a || !b;//true

const expression6 = !(a || b);//false

const expression7 = a && a;//true

const result31a = false;
const result31b = true;
const result31c = false;
const result31d = true;
const result31e = true;
const result31f = false;
const result31g = true;
console.log(result31a == expression1,
    result31b === expression2,
    result31c === expression3,
    result31d === expression4,
    result31e === expression5,
    result31f === expression6,
    result31g === expression7
)