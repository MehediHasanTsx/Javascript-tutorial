// cons = a variable that can't be changed

const PI = 3.14159;
let radius;
let area;
let circumference;

// circumference = 2 * PI * radius;
// area = PI * radius * radius;

//radius = window.prompt(`Enter the radius of a circle`);  // this is for windows pop up
// radius = Number(radius);

// radius = 5; // i can declare the radius like this also. or i can add like above:

document.getElementById("constbtn").onclick = function () {
    radius = document.getElementById("constinp").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    area = PI * radius * radius;

    document.getElementById("constout").textContent = `Area and circumference of the circle is: ${area}cm and ${circumference}cm`;

    document.getElementById("consth1").textContent = `Above is area and circumference of the circle.`;

    console.log(`Area of the circle : ${area}cm`);

    console.log(`Circumference of the circle : ${circumference}cm`);
}
//------

// console.log(`Area of the circle : ${area}`);
// console.log(`Circumference of the circle : ${circumference}`); this  for pop up or declare of radius