/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister= s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5 + ' ' + s3 + ' ' + s2 + ' ' + s1 + ' ' + s4;
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const part1Upp = part1.slice(-1).toUpperCase();
const part2Upp = part2.slice(-1).toUpperCase();

const camelTail = part1Upp + part2Upp;
console.log(camelTail);





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = (billTotal * 15)/100;
console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false bc one of the argument is false and the const uses a &&

const expression2 = a || b;
// true because a is true

const expression3 = !a && b;
// false because !a is false and b is false

const expression4 = !(a && b);
// false because !a is false and !b is true

const expression5 = !a || !b;
// true because !b is true and it's an OR

const expression6 = !(a || b);
// true because !b is true and it's an OR

const expression7 = a && a;
// technically true but doesn't make sense in this situation