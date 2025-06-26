// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = html textbox


// window prompt:
// let username = window.prompt("What's your username?");
// console.log(username);

// Professional way:
let username;
document.getElementById("cmdbtn").onclick = function () {
    username = document.getElementById("cmdtext").value;
    document.getElementById("cmdh1").textContent = `Hello ${username}`
    console.log(username);
}