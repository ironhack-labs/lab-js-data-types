/*******************************************
   
Iteration 1 | Tongue Twister
Create a new variable named tongueTwister by combining the existing strings s1, s2, s3, s4, and s5 to form the following tongue twister string: "Fred fed Ted bread and Ted fed Fred bread".

Once done, print out the tongueTwister string using console.log().

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

// Print out the concatenated string


 Iteration 1.1 | Tongue Twister
*******************************************/

const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " ";


console.log(tongueTwister + "Fred fed Ted bread and Ted fed Fred bread")



//Once done, print out the tongueTwister string using console.log().)
// Concatenate the string variables into one new string


// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail

    Iteration 2 | Camel Tail
In the typical camelCase naming convention used in JavaScript, the first letter of each new word is capitalized. Now, imagine if the world of coding had a different history, where the usual camelCase rule was to capitalize the last letter of each new word. What would we call this naming convention?

Well, we got the answer! Behold, a new naming convention - "cameLtaiL"! 🐪


Create a new variable named result by concatenating the strings part1 and part2, and converting their last letters to uppercase to form a new "cameLtaiL" formatted string: "javAscripT"

Once done, print out the result string using console.log().
*******************************************/
const part1 = "java";
const part2 = "script";

const firstWordLastposition = part1.length - 1;
const secondWordLastposition = part2.length - 1;





// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const firstWordLastCar = part1.charAt(3);
const fisrtWordUppercase = firstWordLastCar.toUpperCase()

const secondWordLastCar = part2.charAt(5);
const secondWordUppercase = secondWordLastCar.toUpperCase();
//const secondWordUppercase = part.charAt(5);

console.log(fisrtWordUppercase, secondWordUppercase)

const substractingPart1 = part1.substring(0, 3)
const substractingPart2 = part2.substring(0, 5)

const convertedWord = substractingPart1 + fisrtWordUppercase + substractingPart2 + secondWordUppercase;

console.log(convertedWord);

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip

    Numbers
Iteration 3 | Calculate Tip
You've had a meal at a restaurant, and you want to leave a tip. The bill total is $84. Calculate a 15% tip and store the amount in a new variable named tipAmount.

Once done, print out the tipAmount value using console.log().

const billTotal = 84;

// Calculate the tip (15% of the bill total)

// Print out the tipAmount

*******************************************/
const billTotal = 84;

const tipAmountCalculation = (84 / 100) * 15
const tipAmount = billTotal - tipAmountCalculation

console.log(tipAmount);


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
Generate a random integer (whole number) between 1 and 10 (inclusive) and store it in a variable named randomNumber.


Once you are done generating and storing the random the number, print it out using console.log().


*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = 5


console.log(randomNumber);

const roundNumber = randomNumber.round()

// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans

    We have provided you with two boolean variables, a and b. Your task is to try and guess the output of the below expressions where the booleans are combined with different logical operators: AND &&, OR ||, NOT !.

You should write down your answer for each expression. Once you are done, use console.log() to print out each expression and compare it to your answer.
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b); // false

const expression5 = !a || !b; // true

const expression6 = !(a || b); // true

const expression7 = a && a; // true