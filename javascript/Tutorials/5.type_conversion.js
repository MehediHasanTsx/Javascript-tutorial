console.log(`Below are type_conversion:`);
// type conversion = change the datatype of a value to another 
// (strings, numbers, booleans)


//here ages is a strings data type but if i declear it as "ages = Number(ages);" number function then it turns string data type to number data type
// let ages = window.prompt("How old are you?");
// ages = Number(ages);
// ages+=1;

// console.log(ages, typeof ages);

let x = "apple";
let y = "pineapple";
let z = "juicy melon";

x = Number(x);
y = Boolean(y);
z = String(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

