/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4} `;

console.log(tongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const cameLtaiL =
  part1.slice(0, part1.length - 1) +
  part1.slice(-1).toUpperCase() +
  part2.slice(0, part2.length - 1) +
  part2.slice(-1).toUpperCase();

  console.log("cameLtaiL: ", cameLtaiL);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tipTotal = billTotal * 0.15;


console.log("Your tip is: " + tipTotal);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
const randomNumber =  Math.floor(Math.random() * 10) + 1;

console.log("Random number: " + randomNumber);


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// answer: false

const expression2 = a || b;
// answer: true

const expression3 = !a && b;
// answer: false

const expression4 = !(a && b);
// true

const expression5 = !a || !b;
// answer: true

const expression6 = !(a || b);
// answer: false

const expression7 = a && a;
// answer: true

console.log (expression7);









