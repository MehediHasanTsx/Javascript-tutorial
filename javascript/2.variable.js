// variable = A container that stores a value.
// Behaves as if it were the value it contains.

// 1. declaration  let x;
// 2. assignment   x = 100;

// let a;
// a = 50; // if you dont know exact value of variable first,, then you can do like this

console.log(`variable.js`)
let a = 50; //if you know the exact value of variable
let age = 20;
let salary = 2000;
let price = "100";
let cgpa = 3.5;

console.log(`ABOVE SHOWS VARIABLE VALUE IN THE CONSOLE`); // above shows variable value in the console
console.log(a);
console.log(age);
console.log(price);
console.log(salary);

console.log(`You have obtained cgpa ${cgpa} out of 4.oo`);
console.log(`Your salary is $${salary} taka per day`)


console.log(`DATATYPE OF THE VARIABLES SHOWS IN CONSOLE BY ABOVE WRITTEN`); // datatype of the variables shows in console by above written
console.log(typeof a);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof price);
console.log(typeof cgpa);



console.log(`ABOVE ARE STRINGS`); //above are strings
let Name = "Mehedi";
let Favoritefood = "Apple"
let gmail = "mehedihasan2003sr@gmail.com"

console.log(Name);
console.log(typeof Name);
console.log(`My name is ${Name} Hasan`);

console.log(Favoritefood);
console.log(typeof Favoritefood);
console.log(`My favorite food is ${Favoritefood}`);

console.log(gmail);
console.log(typeof gmail);
console.log(`My gmail address is ${gmail}`);



console.log(`ABOVE ARE BOOLEANS`);  //ABOVE ARE BOOLEANS
let active = false;
let forsale = true;
let isStudent = true;

console.log(`My friend is active: ${active}`);
console.log(`Your car is on sale? : ${forsale}`);
console.log(`Is he Enrolled: ${isStudent}`);

console.log(`variables with html`); // variables with html
let fullName = "Mehedi Hasan";
let age2 = 22;
let student = true;

document.getElementById("p1").textContent = `My name is ${fullName}.`;
document.getElementById("p2").textContent = `I am ${age2} years old.`;
document.getElementById("p3").textContent = `I am a student. : ${student}.`;