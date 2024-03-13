console.log("This is our first log");

let studentName;

studentName = "daniel";

studentName = studentName[0].toUpperCase() + studentName.slice(1);

const petName = "Ragnar";

const ragnarsLength = petName.length;

let ourOldStyleString = "let's talk about strings, and my pet" + " " + petName;


const doesItHave = petName.includes("Rag");
const indexOfR = petName.indexOf("z");




let myAge = "37.9";

let myNewAge = (myAge + 10).toString();

const myAgeAsANumber = parseInt(myAge);
let mathEx = Math.pow(2, 3);

const randomNumber = Math.random();
console.log(randomNumber);
let petName2 = "Reaper";
const randomLetterIndex = Math.floor(Math.random() * petName2.length);
console.log("our random letter", petName2[randomLetterIndex]);
