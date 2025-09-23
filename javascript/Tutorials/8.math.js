// math = built-in object that provides a collection of properties and methods
document.getElementById("mathheading").textContent = `Go to inspect then console log.`;


console.log(`Above are Math section`)
console.log(`Value of PI = ${Math.PI}`);
console.log(`Value of e = ${Math.E} `);

let x1 = 3.32;
let y1 = 4.50;
let z1;

z1 = 5.32;
console.log(z1, typeof z1);

let z2;
z2 = Math.round(x1); //Math.round makes a number variable rounded smartly
console.log(`Rounded value of x1 = ${z2}`);

let z3;
z3 = Math.floor(y1); //Math.floor makes a number variable rounded low or floored
console.log(`Floored value of y1 = ${z3}`);

let y2 = 5.98;
let z4;
z4 = Math.ceil(y2); //Math.ceil makes a number variable rounded high 
console.log(`Ceiled value of y2 = ${z4}`);

let y3 = 5.98;
let z5;
z5 = Math.trunc(y3); //Math.trunc makes a number variable - eleminate any decimal portion
console.log(`Truncked value of y3 = ${z5}`);

let y4 = 2;
let y5 = 3;
let z6;
z6 = Math.pow(y4, y5); //Math.pow makes a number variable to the power variable
console.log(`Powered value of y4 = ${z6}`);

/*there are more about math.function
//for example:
Math.sqrt()  //this makes square root of a number variable
Math.log()  //this makes log of a number variable
Math.sin()  //this makes radians or degree of sin  
Math.cos()   
Math.tan()   
Math.abs()   //this makes negative num to positive
Math.sign()  // (if the variable is positive then it show 1) and (if variable is negetive then it show -1) and (if variable is 0 then it show 0)
let max = Math.max(x,y,z);  //it calculate maximum number 
let min = Math.min(x,y,z);  //it calculate minimum number 
*/