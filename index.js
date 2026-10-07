/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";



const tongueTwister= console.log(`tongue twister value is: ${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`);
// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const firstPart1 = part1[3].toUpperCase();
const secondPart2 =part2[5].toUpperCase();

const firstRestPart=part1.slice(0,3);
const secondRestPart=part2.slice(0,5);


console.log(firstPart1);
console.log(secondPart2);
console.log(firstRestPart);
console.log(secondRestPart);

// Print the cameLtaiL-formatted string

let result=`${firstRestPart}${firstPart1}${secondRestPart}${secondPart2}`;

console.log(result);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;



// Calculate the tip (15% of the bill total)
const tipAmount=billTotal*15/100;

console.log(tipAmount);

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
console.log(Math.random());

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

/* // false;
   true;
   false;
   true;
   true;
   false;
   true; */

   console.log(expression1);
      console.log(expression2);
         console.log(expression3);
            console.log(expression4);
               console.log(expression5);
                  console.log(expression6);
                     console.log(expression7);