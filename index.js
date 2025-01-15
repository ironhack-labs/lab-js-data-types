/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
// Concatenate the string variables into one new string
const string= s1+s2+s3+s4+s5;

// Print out the concatenated string
console.log(`${s1}  ${s2}  ${s3}  ${s4}  ${s5}`);
console.log(string);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let newpart1=part1.slice(0 -1)+ part1.charAt(word.length - 1).toUpperCase();
let newpart2=part2.slice(0 -1)+ part2.charAt(word.length - 1).toUpperCase();
let concard=newpart1+newpart2;

// Print the cameLtaiL-formatted string

console.log(concard);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip=(15/100)*billTotal;

// Print out the tipAmount
console.log(tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
lett randomNumber = Math.floor(Math.random() * 10) + 1;
// Print the generated random number

console.log(Math.floor(Math.random() * 10) + 1);




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false;
const expression2 = a || b;

true;
const expression3 = !a && b;

false;
const expression4 = !(a && b);

true;
const expression5 = !a || !b;

true;
const expression6 = !(a || b);
true;
const expression7 = a && a; 
false;
const expression7 = a && a;
true;