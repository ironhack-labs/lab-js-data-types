/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";


let tonguetwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java"        // javA
const part2 = "script"      // scripT

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// sacar ultima letra
const lastLetter1 = part1[part1.length - 1].toUpperCase()
const lastLetter2 = part2[part2.length - 1].toUpperCase()

// sacar el principio del texto todo menos la ultima letra // juntarlos 
const firstPart1 = part1.slice(0, 3)
const firstPart2 = part2.slice(0, 5)

const result1 = firstPart1 + lastLetter1
const result2 = firstPart2 + lastLetter2





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************const result = modifiedPart1 + modifiedPart2;************/
const totalbill = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = totalbill * 0.15;

// Print out the tipAmount
console.log(tipAmount);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;
// Print the generated random number
console.log(randomNumber);

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