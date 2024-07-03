/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const newString = `${s1} ${s2} ${s3} ${s4} ${s5}`
console.log(newString);
// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const length = part1.length



const lastLetterUpper = part1.charAt(length-1).toUpperCase();

const newPart1 = part1.slice(0, length-1) + lastLetterUpper;




// 

const length2 = part2.length



const last2LetterUpper = part2.charAt(length2-1).toUpperCase();

const newPart2 = part2.slice(0, length2-1) + last2LetterUpper;



// Print the cameLtaiL-formatted string

const newDoubleString = `${newPart1} ${newPart2}`

console.log(newDoubleString)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const percentage = 15;

const tipAmount = (percentage/100) * billTotal



// Print out the tipAmount

console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
  const randomNumber = Math.floor(Math.random() * (1 + 10 - 1)) + 1.

  console.log(randomNumber);




// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;   //True

const expression2 = a || b; // False

const expression3 = !a && b; // False

const expression4 = !(a && b);  // True

const expression5 = !a || !b; //True

const expression6 = !(a || b); // False

const expression7 = a && a; //True


console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);