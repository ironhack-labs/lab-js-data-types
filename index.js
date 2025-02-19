/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const s6 = s1 + s2 + s3 + s4;

// Print out the concatenated string
console.log('s6 is the new string : ',s6);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const part1UppercaseOnTheLast = part1.slice(0,part1.length-1) + part1[part1.length-1].toUpperCase();
const part2UppercaseOnTheLast = part2.slice(0,part2.length-1) + part2[part2.length-1].toUpperCase();
const part3Formated = part1UppercaseOnTheLast + part2UppercaseOnTheLast;

// Print the cameLtaiL-formatted string
console.log('part3Formated : ', part3Formated);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * 15 / 100;

// Print out the tipAmount
console.log('Tip : ', tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
console.log('Math.ceil(1) = ',Math.ceil(1));
console.log('Math.floor(10) = ',Math.floor(10));
const randomIntergerBetween1and10 = Math.floor(Math.random() * (Math.floor(10) - Math.ceil(1) + 1) + Math.ceil(1));

// Print the generated random number
console.log('Random between 1 and 10 included : ', randomIntergerBetween1and10);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(' I guess FALSE and the right answer is : ',expression1);
const expression2 = a || b;
console.log(' I guess TRUE and the right answer is : ',expression2);
const expression3 = !a && b;
console.log(' I guess FALSE and the right answer is : ',expression3);
const expression4 = !(a && b);
console.log(' I guess TRUE and the right answer is : ',expression4);
const expression5 = !a || !b;
console.log(' I guess TRUE and the right answer is : ',expression5);
const expression6 = !(a || b);
console.log(' I guess FALSE and the right answer is : ',expression6);
const expression7 = a && a;
console.log(' I guess TRUE and the right answer is : ',expression7);