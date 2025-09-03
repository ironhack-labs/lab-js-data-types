/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5}`;

console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const cameLtaiL =
  part1.slice(0, 3) +
  part1[part1.length - 1].toUpperCase() +
  " " +
  part2 +
  part2[part2.length - 1].toUpperCase();

console.log(cameLtaiL);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

const tipPercentage = 0.15;

const tipValue = billTotal * tipPercentage;

console.log(tipValue);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
const num1 = 1;
const num2 = 10;

const ramdomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

console.log(ramdomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// false
const expression2 = a || b;
// true
const expression3 = !a && b;
// false
const expression4 = !(a && b);
// true
const expression5 = !a || !b;
// true
const expression6 = !(a || b);
// false
const expression7 = a && a;
// true
