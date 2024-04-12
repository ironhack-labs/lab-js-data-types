/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/


const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;

console.log(tongueTwister); 

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/

const part1 = "java";
const part2 = "script";


const result = part1[ part1.length -1].toUpperCase();
const pice = part1.slice( 0, 3);

const result2 =part2[part2.length -1].toUpperCase();
const pice2 = part2.slice(0, 5);
const cameLtaiL1 = pice +result + pice2 + result2;

console.log(cameLtaiL1);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

const billTotal = 84;
const valor = 15;

const tipAmount= (valor / billTotal ) *100;

console.log(tipAmount);
// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)


const randomInteger = Math.floor(Math.random() * 10) + 1;
console.log(randomInteger);
// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
********************************************/



// Try and guess the output of the below expressions first and write your answers down:

/*const expression1 = a && b; //false

const expression2 = a || b;// true

const expression3 = !a && b;// false

const expression4 = !(a && b);//true

const expression5 = !a || !b;//true

const expression6 = !(a || b);//false

const expression7 = a && a;// true 

console.log( expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);*/

//my answer//

const a = true;
const b = true;

const expression1 = a && b; //false

const expression2 = a || b;// true

const expression3 = !a && b;// false

const expression4 = !(a && b);//true

const expression5 = !a || !b;//true

const expression6 = !(a || b);//false

const expression7 = a&&a ;// true

console.log( expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);


