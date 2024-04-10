/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister =
 `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(` Tongue Twister: ${tongueTwister}`);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const p1LastIndex = part1.length - 1;
const p2LastIndex = part2.length - 1;

const p1LastCh = part1.charAt(p1LastIndex).toUpperCase();
const p2LastCh = part2.charAt(p2LastIndex).toUpperCase();

const p1 = part1.slice(0,p1LastIndex) + p1LastCh ;
const p2 = part2.slice(0,p2LastIndex) + p2LastCh ;


// Print the cameLtaiL-formatted string
console.log(`result is: ${p1 + p2}`);


// resuable Function to implemente this senario:
function cameLtaiL(str){
    const lastIndex = str.length - 1;

    const strFormat = str.slice(0,lastIndex) + str.charAt(lastIndex).toUpperCase();
    return strFormat;
}

const result2 = cameLtaiL(part1) + cameLtaiL(part2);

console.log(`result , with using a function: ${result2}`)




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)


const tipAmount = billTotal * ( 15 / 100 );

// Print out the tipAmount
console.log(`the tip amount is : ${tipAmount} `);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const roundNumber = Math.round(Math.random() * 10);

// Print the generated random number
console.log(`round number between 1 and 10: ${roundNumber}`);



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); // flase

const expression7 = a && a; // true