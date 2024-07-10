/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = `"${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}"`

console.log(tongueTwister);






/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
const lastCharUp1 = part1[3].toUpperCase();
const newPart1 = part1.substr(0, 3) + lastCharUp1;
const lastCharUp2 = part2[5].toUpperCase();
const newPart2 = part2.substr(0, 5) + lastCharUp2;
const result = newPart1+newPart2;
console.log(result);





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tip = 84 * 0.15;

const tipAmount = tip.toFixed(2);

console.log(tipAmount);






/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

let x = Math.floor((Math.random() * 10) + 1);
console.log(x);




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

console.log(expression1);

const expression2 = a || b; //true

console.log(expression2);

const expression3 = !a && b; // false

console.log(expression3);

const expression4 = !(a && b); // true

console.log(expression4);

const expression5 = !a || !b; // true

console.log(expression5);

const expression6 = !(a || b); // false

console.log(expression6);

const expression7 = a && a; // true

console.log(expression7);