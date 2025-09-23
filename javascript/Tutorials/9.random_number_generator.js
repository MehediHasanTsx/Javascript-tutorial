// RANDOM NUMBER GENERATOR
console.log("Rnadom Number:")
const min = 50;
const max = 100;

let randomnum = Math.trunc(Math.random() * (max - min)) + min;

console.log(randomnum);

const rng_button = document.getElementById("rng_btn");
const rng_label = document.getElementById("rng_label");
const min_rng = 1;
const max_rng = 6;
let randomnum_rng;

rng_button.onclick = function () {
    randomnum_rng = Math.trunc(Math.random() * (max_rng - min_rng)) + min_rng;
    rng_label.textContent = randomnum_rng;
}