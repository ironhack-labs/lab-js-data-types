/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";


const tongueTwister = s1 +" " + s2 +" " + s3 + " " +s4 +  " " + s5 + " " +s3 + " " + s2 + " " + s1 + " " + s4;
console.log(tongueTwister)

// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let lastWord = part1[part1.length - 1].toUpperCase();
let lastWord2 = part2[part2.length - 1].toUpperCase();

const newPart1 = part1.slice(0, part1.length - 1) + lastWord;
const newPart2 = part2.slice(0, part2.length - 1) + lastWord2;



console.log(newPart1 + newPart2)



// const result = part1 + " " + part2
// console.log(result)






// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
let tip =( 15/100 ) * billTotal
console.log(tip)

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




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
const expression1 = a && b;  //false
console.log(expression1)

const expression2 = a || b; //true
console.log(expression2)

const expression3 = !a && b;  // false
console.log(expression3)

const expression4 = !(a && b); // true
console.log(expression4)

const expression5 = !a || !b;   //true
console.log(expression5)

const expression6 = !(a || b); // false
console.log(expression6)

const expression7 = a && a; // true
console.log(expression7)