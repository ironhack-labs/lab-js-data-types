/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const Tongue= s1+ " "+s2+" "+s3+" "+s4+" "+s5+" "+s3+" "+s2+" "+s1+" "+s4
console.log(Tongue)




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

const cameLtaiL= part1.slice(0,1).toUpperCase()+part1.slice(1)+part2.slice(0,1).toUpperCase()+part2.slice(1)
const camelTail2= part1.slice(0,1)+part1.slice(1,2).toUpperCase()+part1.slice(2)

console.log(cameLtaiL)
console.log(camelTail2)
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tipAmount= billTotal*1.15
console.log(`the tip amount ${tipAmount}`);

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

const randomNumber= Math.floor(Math.random()*10)+1;
console.log(randomNumber)
// Generate a random integer between 1 and 10 (inclusive)


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;