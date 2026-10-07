/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let tongueTwister= s1 + " " + s2 + " " + s3 +" " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4

console.log(tongueTwister)

// I wanted to try it using interpolation: 

// let tongueTwister= `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// console.log(tongueTwister)

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let result = part1.slice(0, 3) + part1[3].toUpperCase() + part2.slice(0, 5) + part2[5].toUpperCase();

console.log(result); 

// Print the cameLtaiL-formatted string

// I'm testing how .toUpperCase works:
// let text = "Hello World!";
// let result = text.toUpperCase();
// console.log(result);

// this will be the result: HELLO WORLD!


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

let tipAmount = (15/100)*billTotal;

console.log(tipAmount);



// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)



let randomNumber = Math.floor(Math.random()*10) + [1];

console.log(randomNumber);

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true 

const expression3 = !a && b; // false 

const expression4 = !(a && b);  // false 

const expression5 = !a || !b;  // true

const expression6 = !(a || b);  // true

const expression7 = a && a;  // true 