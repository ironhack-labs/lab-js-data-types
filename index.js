const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;
console.log("Iteration 1:", tongueTwister);

const part1 = "java";
const part2 = "script";
const camelTail = part1.slice(0, -1) + part1.slice(-1).toUpperCase() +
                  part2.slice(0, -1) + part2.slice(-1).toUpperCase();
console.log("Iteration 2:", camelTail);

const billTotal = 84;
const tipAmount = billTotal * 0.15;
console.log("Iteration 3: Tip amount is", tipAmount);

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Iteration 4: Random number between 1 and 10:", randomNumber);

const a = true;
const b = false;

const expression1 = a && b;
const expression2 = a || b;
const expression3 = !a && b;
const expression4 = !(a && b);
const expression5 = !a || !b;
const expression6 = !(a || b);
const expression7 = a && a;

console.log("Iteration 5:");
console.log("expression1:", expression1);
console.log("expression2:", expression2);
console.log("expression3:", expression3);
console.log("expression4:", expression4);
console.log("expression5:", expression5);
console.log("expression6:", expression6);
console.log("expression7:", expression7);
console.log("Test PR Álvaro");
