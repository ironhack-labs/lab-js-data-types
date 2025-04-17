/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const TongTwister =`${s1} ${s2} ${s3} ${s4} ${s5}`
console.log(TongTwister)
// Print out the concatenated string
console.log(s1 + " " + s2 + " " + s3 + " " + s4 +" " + s5 + " ")

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";


// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const Cameltail1 = part1.slice(0,-1) + part1.slice(-1).toUpperCase()
const CamelTail2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase()
// Print the cameLtaiL-formatted string

console.log(Cameltail1 + CamelTail2)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipResult = billTotal * 0.15

// Print out the tipAmount
console.log(`The tip ammount is : ${tipResult.toFixed(2)}€`)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNum1 = Math.floor(Math.random()* 10) + 1  ;


// Print the generated random number

console.log(randomNum1);
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;  //false
console.log(`false`)
const expression2 = a || b;  //true
console.log(`true`)
const expression3 = !a && b; //false
console.log('false')
const expression4 = !(a && b); //true
console.log('true')
const expression5 = !a || !b; //true
console.log('true')
const expression6 = !(a || b); //false
console.log('false')
const expression7 = a && a; //true
console.log("true")