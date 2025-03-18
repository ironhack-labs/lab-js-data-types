/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

console.log(`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`)

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const formatString = `${part1.slice(0,part1.length-1)}${part1.slice(-1).toUpperCase()} ${part2.slice(0,part2.length-1)}${part2.slice(-1).toUpperCase()}`;


// Print the cameLtaiL-formatted string
console.log(formatString);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)


// Print out the tipAmount
console.log(billTotal*0.15);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number
console.log(Math.floor(Math.random()*10)+1);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:

// false
const expression1 = a && b;
// true
const expression2 = a || b;
// false
const expression3 = !a && b;
// true
const expression4 = !(a && b);
// true
const expression5 = !a || !b;
// false
const expression6 = !(a || b);
// true
const expression7 = a && a;