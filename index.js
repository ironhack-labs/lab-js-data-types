/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s2} ${s1} ${s4}` 

// Print out the concatenated string

console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
lastLetter1 = part1[part1.length-1].toLocaleUpperCase()
lastLetter2 = part2[part2.length-1].toLocaleUpperCase()

firstLettersPart1 = part1.slice(0,part1.length-1)
firstLettersPart2 = part2.slice(0,part2.length-1)
const result = `${firstLettersPart1}${lastLetter1}${firstLettersPart2}${lastLetter2}`
// Print the cameLtaiL-formatted string

console.log(result)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tip = 0.15*billTotal
// Print out the tipAmount

console.log(tip)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const random = Math.ceil(Math.random()*10) 
// Print the generated random number

console.log(random)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//fale
const expression2 = a || b;
//true
const expression3 = !a && b;
//false
const expression4 = !(a && b);
//true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//false
const expression7 = a && a;
//true

console.log('1',a && b)
console.log('2',a || b)
console.log('3',!a && b)
console.log('4',!(a && b))
console.log('5',!a || !b)
console.log('6',!(a || b))
console.log('7',a && a)
