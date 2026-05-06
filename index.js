/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";


// Concatenate the string variables into one new string
const tongueTwister= s1+ " "+ s2 + " "+s3 + " "+s4 + " "+s5 + " "+ s1+ " "+s2+ " "+s3+ " "+s4

// Print out the concatenated string
console.log(tongueTwister)




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script"

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
console.log(part1.length)
const convert1=part1.substring(0, part1.length-1)+ part1.substring(part1.length-1).toUpperCase()
const convert2=part2.substring(0, part2.length-1)+ part2.substring(part2.length-1).toUpperCase()

// Print the cameLtaiL-formatted string
const cameLtaiL=convert1+convert2
console.log(cameLtaiL)





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function tipAmount(){
    console.log("tip Amount",(15/100)*billTotal)
    

}


// Print out the tipAmount
tipAmount()



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}



// Print the generated random number
console.log("Random number", getRandomIntInclusive(1,10))



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log(expression1)

const expression2 = a || b;//true
console.log(expression2)

const expression3 = !a && b;//false
console.log(expression3)

const expression4 = !(a && b);//true
console.log(expression4)

const expression5 = !a || !b;//false
console.log(expression5)

const expression6 = !(a || b);//true
console.log(expression6)

const expression7 = a && a;//true
console.log(expression7)