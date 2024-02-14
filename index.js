/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const combinedString = [s1,s2,s3,s4,s5].join(' ')

// Print out the concatenated string
console.log('Iteration 1.1 | Tongue Twister: ', combinedString)



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const upperLast = (string) => 
    string
        .slice(0,string.length -1)
        .concat(
            string[string.length-1].toUpperCase()
        )

// Print the cameLtaiL-formatted string
console.log('Iteration 1.2 | Camel Tail: ', upperLast(part1) + upperLast(part2))


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function calculateBill(bill,tipPercentage = 15) {
    return (bill + (bill * (tipPercentage /100))).toFixed(2)
}

// Print out the tipAmount
console.log('Iteration 2.1 | Calculate Tip: ', calculateBill(84))



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomBetween = (min = 1,max = 10) => {
    return Math.floor((Math.random() * ((max + 1) - min)) + min)
}
const times = 100000
const arrayOfResults = Array.from({length: times}, () => randomBetween(1,100))
const occurrenceMap = (arrayOfNumbers) =>
        arrayOfResults.reduce((acc,cur) => {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1
            return acc
            },{}
        )

const findMean = (arrayOfNumbers) => arrayOfNumbers.reduce((a,b) => a + b) / arrayOfNumbers.length

//console.log('mean:',findMean(Object.values(occurrenceMap(arrayOfResults))))

//console.log(occurrenceMap(arrayOfResults))
const calculateStandardDeviation = (arrayOfResults) => {
    const mean = findMean(arrayOfResults)
    const squaredVariance =  arrayOfResults.map(a => Math.abs(a - mean) ** 2)
    const sumOfSquares = squaredVariance.reduce((a,b) => a + b)
    const quotient = sumOfSquares / (arrayOfResults.length - 1)
    return Math.sqrt(quotient)
}

//console.log('standard deviation: ', calculateStandardDeviation(arrayOfResults))

            // Print the generated random number
console.log('Iteration 2.2 | Generate Random Number: ',randomBetween())


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); //true

const expression5 = !a || !b; //true

const expression6 = !(a || b); //false

const expression7 = a && a; //true
