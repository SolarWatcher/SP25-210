console.log("Ummm.... where are we?")

const birthyear = 1207;

let myName = "Sunny The Sun";

console.log(myName, "was born", birthyear);

myName = "Sunny";

// birthyear = 1000

console.warn(myName, "Perhaps consumed 9374 souls");

console.log("myName is", myName.length, "characters long.");

console.log("myName includes su", myName.toUpperCase().includes("SU"));

myName = "Su"

console.log("myName has uppercase:", myName !== myName.toLowerCase());
console.log("myName has lowercase:", myName !== myName.toUpperCase());

const PI = 3.1415926535897932384626;

console.log(PI.toFixed(2));

// get a random number between 1-100

const randomNumber = Math.floor(Math.random() * 100)+1;

console.log("random number: " + randomNumber);

console.log(Math.PI - PI, PI.toString().length);

console.log(PI, PI.toString());

console.log("loose check", PI == PI.toString());
console.log("strict check", PI === PI.toString());

