let increment = document.getElementById("greetingAdd");
let decrement = document.getElementById('greetingSubtract')
let save = document.getElementById('save');
let greeters = document.getElementById('greeters');
let count = 0;
let total = document.getElementById('total')

function addGreetings(){
    count += 1;
    greeters.textContent = count;
}

function subtractGreetings(){
    count -= 1;
    greeters.textContent = count;
}

function saveGreetings(){
    saved = count  + " - ";
    total.textContent += saved;
    count = 0;
    greeters.textContent = count;
}