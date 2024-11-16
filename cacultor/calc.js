
function clearDisplay() {
    document.calc.display.value = '';
}


function deleteLast() {
    var display = document.calc.display;
    display.value = display.value.toString().slice(0, -1);
}


function appendToDisplay(value) {
    document.calc.display.value += value;
}


function calculateResult() {
    var display = document.calc.display;
    try {
        let result = eval(display.value) || '';
         if (result % 1 !== 0) {
            result = result.toFixed(3);
        }
        display.value=result;
        console.log(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

document.getElementById('display').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateResult();
    }
});

