/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = ` ${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4} `;
console.log(tongueTwister);


const part1 = "java";
const part2 = "script";
const result = part1.substring(0,part1.length -1) +
              part1.charAt(part1.length -1).toUpperCase() +
              part2.substring(0,part2.length -1) +
              part2.charAt(part2.length -1).toUpperCase()
console.log(result)



const billTotal = 84;

const tipAmount = billTotal * 15/100;
console.log(tipAmount);



const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


const a = true;
const b = false;

const expression1 = a && b;
//false
console.log(expression1)
const expression2 = a || b;
//true
console.log(expression2)
const expression3 = !a && b;
//false
console.log(expression3)
const expression4 = !(a && b);
// true
console.log(expression4)
const expression5 = !a || !b;
// true
console.log(expression5)
const expression6 = !(a || b);
// false
console.log(expression6)
const expression7 = a && a;
// true
console.log(expression7)