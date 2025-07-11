// Iteration 1
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const text = `${s1} ${s2} ${s3} ${s5} ${s3} ${s2} ${s1} ${s4}`;
// "Fred fed Ted bread and Ted fed Fred bread".

console.log(text);

// Itertation 2
const part1 = "java";
const part2 = "script"; 

const part1new = part1.slice(0,-1) + part1.slice(-1).toUpperCase()

const part2new = part2.slice(0,-1) + part2.slice(-1).toUpperCase()

const cameLCase = part1new + part2new

console.log(cameLCase)

// Itration 3

const billTotal = 84;

const tipAmount = billTotal * 0.15

console.log(tipAmount)

// Iteration 4
const max = 10
const randomNumber = Math.floor(Math.random() * max)

console.log(randomNumber)

// Iteration 5
const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log(expression1)

const expression2 = a || b; // true
console.log(expression2)

const expression3 = !a && b; // false
console.log(expression3)

const expression4 = !(a && b); // true
console.log(expression4)

const expression5 = !a || !b; // true
console.log(expression5)

const expression6 = !(a || b); // false
console.log(expression6)

const expression7 = a && a; // true
console.log(expression7)