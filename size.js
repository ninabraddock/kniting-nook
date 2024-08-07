// first
const patternSelect = document.getElementById('pattern');
const txt1 = document.getElementById('neckband-size');
const btn1 = document.getElementById('final-submit');
const out1 = document.getElementById('log');

// replace contents
function func1(measurement, letter) {
    let result = measurement * letter;
    out1.innerHTML = Math.round(result);
}

// second
const txt2 = document.getElementById('bust-size');
const out2 = document.getElementById('log2');

// replace contents
function func2(measurement, letter) {
    let result = measurement * letter;
    out2.innerHTML = Math.round(result);
}

// third
const txt3 = document.getElementById('wrist-size');
const out3 = document.getElementById('log3');

// replace contents
function func3(measurement, letter) {
    let result = measurement * letter;
    out3.innerHTML = Math.round(result);
}

// only call specific functions if a specific answer was selected
btn1.addEventListener('click', function() {
    let b = 0.8;
    let a = 1.7;
    if (patternSelect.value === 'williamsburg-sweater') {
        func1(txt1.value, a);
        func2(txt2.value, a);
        func3(txt3.value, a);
    } 

    else {
        // out1.innerHTML = '___'; 
        func1(txt1.value, b);
        func2(txt2.value, b);
        func3(txt3.value, b);
    }
});

