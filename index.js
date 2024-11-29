/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";




// Concatenate the string variables into one new string
const space = " "
const tongueTwister = s1 + space + s2 + space + s3 + space + s4 + space + s5

// Print out the concatenated string

console.log(`${tongueTwister + space + s3 + space + s2 + space + space + s1 + space + s4}`)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const javaWithOutA = part1.substring(0, part1.length - 1)
const scriptWithOutT = part2.substring(0, part2.length - 1)

const javaFinal = javaWithOutA + "A"
const scriptFinal = scriptWithOutT + "T"
const result = javaFinal + scriptFinal

// Print the cameLtaiL-formatted string

console.log(result)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = (billTotal * 15) / 100


// Print out the tipAmount
console.log(tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomIntInclusive(1, 10);

// Print the generated random number

console.log(getRandomIntInclusive(1, 10))

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //Mi respuesta: false

const expression2 = a || b; //Mi respuesta: true

const expression3 = !a && b; //Mi respuesta: false

const expression4 = !(a && b); //Mi respuesta: false

const expression5 = !a || !b; //Mi respuesta: true

const expression6 = !(a || b); //Mi respuesta: false

const expression7 = a && a; //Mi respuesta: true



//Este es el console log --->  false true false true true false true