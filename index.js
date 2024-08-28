/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const tongueTwister= (`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`)


    
    

// Concatenate the string variables into one new string


// Print out the concatenated string

console.log (tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";
let sumaP= `${part1.slice(0,part1.length-1)}${part1.toUpperCase()[part1.length-1]}${part2.slice(0,part2.length-1)}${part2.toUpperCase()[part2.length-1]}`
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings



// Print the cameLtaiL-formatted string

console.log(sumaP)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
tipAmount= 84 * 0.15


// Calculate the tip (15% of the bill total)


// Print out the tipAmount
console.log (tipAmount)



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)



// Print the generated random number

console.log(Math.random()*10)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //Flaso

const expression2 = a || b; //verdadero

const expression3 = !a && b; //falso

const expression4 = !(a && b); //verdadero

const expression5 = !a || !b; //verdadero 

const expression6 = !(a || b);//Falso

const expression7 = a && a;//verdadero