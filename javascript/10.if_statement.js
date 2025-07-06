// If statement = if a condition is true, execute some code if not, do something else



// let time = 13;

// if (time < 12){
//     console.log(`Good morning`);
// }
// else{
//     console.log(`Good evening`);
// }


//2nd formula (bulian)
// let isStudent1 =  true;

// if (isStudent1){
//     console.log(`You are a student`);
// }
// else{
//     console.log(`You are not a student`);
// }

//nested if statement

// let age3 = 23;
// let haslicense = false;

// if (age3 >=18){
//     console.log(`You are old enough to get license`);
// }
// else{
//     console.log(`You must 18+ to have a license`);
// }


document.getElementById("submit").onclick = function () {
    your_age = document.getElementById("enter_age").value;

    if (your_age >= 18) {
        document.getElementById("result").textContent = `You are adult and can open this website.`;
    }
    else {
        document.getElementById("result").textContent = `You can't open this website.`
    }
}