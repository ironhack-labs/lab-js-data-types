/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const s = " "
// Concatenate the string variables into one new string
const result11 = s1 +s+ s5  +s+ s3 +s+ s2 +s+ s4 
const result111 =`${s1} ${s5} ${s3} ${s2} ${s4}` 
// Print out the concatenated string
console.log(result11)
console.log(result111)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const cutPart1 = part1.slice(0,-1) + (part1.slice(-1).toUpperCase()); 

const cutPart2 = part2.slice(0,-1) + (part2.slice(-1).toUpperCase()); 

console.log(cutPart1 + cutPart2 )

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipPP = 0.15;
const calculTip = billTotal*tipPP
// Print out the tipAmount
console.log("The tip is :" + calculTip +s+ "EUR")
console.log( calculTip)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const result22 = Math.round(Math.random()*10);
// Print the generated random number
console.log(result22)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
'false' 
const expression2 = a || b;
'false' 
const expression3 = !a && b;
'true'
const expression4 = !(a && b);
'true'
const expression5 = !a || !b;
'true'
const expression6 = !(a || b);
'false' 
const expression7 = a && a;
'true'
