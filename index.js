/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

console.log (tongueTwister)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/

const part1 = "java";
const part2 = "script";

const part1cap = part1.slice(0,-1)+ part1.slice(-1).toUpperCase();
const part2cap = part2.slice(0,-1)+ part2.slice(-1).toUpperCase();

const result = `${part1cap} ${part2cap}`

console.log(result)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

const billTotal = 84;

const tipAmount = billTotal * 0.15

console.log(tipAmount)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

let randomNumber = Math.floor(Math.random()*10)+1

console.log (randomNumber)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

const expression1 = a && b;
// FALSE

const expression2 = a || b;
// TRUE

const expression3 = !a && b;
// FALSE

const expression4 = !(a && b);
// TRUE

const expression5 = !a || !b;
// TRUE

const expression6 = !(a || b);
// FALSE

const expression7 = a && a;
// TRUE

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)