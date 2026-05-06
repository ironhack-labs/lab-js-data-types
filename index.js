/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const results = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;

// Print out the concatenated string
console.log(results);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let result = 
    part1.slice(0,-1) + part1.slice(-1).toUpperCase() +
    part2.slice(0,-1) + part2.slice(-1).toUpperCase();

    console.log(result);

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const result = billTotal * (15/100);
console.log(result);

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
for(let i=0; i<10; i++); 
let randominteger = Math.floor(Math.random() * 10);{
let randomNumber = Math.floor(randominteger) + 1;
  console.log(randomNumber);
}


// Print the generated random number
onsole.log(Math.random());


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
FALSE

const expression2 = a || b;
TRUE

const expression3 = !a && b;
FALSE

const expression4 = !(a && b);
TRUE

const expression5 = !a || !b;
TRUE

const expression6 = !(a || b);
FALSE

const expression7 = a && a;
TRUE