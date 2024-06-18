// Global variables
const convertOption = document.getElementById('convertOption');
const formLabel = document.getElementById('formLabel');
const inputValue = document.getElementById('convertInput'); // Fixed typo here
const convertBtn = document.getElementById('convertBtn');
const resultArea = document.querySelector('.result');

resultArea.style.display = 'none';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return ((9 / 5) * celsius) + 32;
}

function handleConversion(e) {
    e.preventDefault();
    let inputFieldValue = parseInt(inputValue.value);
    if (isNaN(inputFieldValue)) { // Fixed variable name here
        resultArea.innerHTML = 'Please insert a valid number';
    } else {
        let result;
        if (convertOption.value === 'fahrenheit') {
            result = toCelsius(inputFieldValue);
            resultArea.innerHTML = `Fahrenheit of ${inputFieldValue} Celsius is ${Math.floor(result)}`;
        } else if (convertOption.value === 'celsius') {
            result = toFahrenheit(inputFieldValue);
            resultArea.innerHTML = `Celsius of ${inputFieldValue} Fahrenheit is ${Math.floor(result)}`;
        }
    }
}

function handleOptionChange(e) {
    e.preventDefault();
    if ('fahrenheit' === convertOption.value) {
        console.log('fahrenheit');
        formLabel.textContent = 'Fahrenheit';
        inputValue.setAttribute('placeholder', 'Fahrenheit');
    } else if ('celsius' === convertOption.value) {
        console.log('celsius');
        formLabel.textContent = 'Celsius';
        inputValue.setAttribute('placeholder', 'Celsius');
    }
}

convertBtn.addEventListener('click', handleConversion);
convertOption.addEventListener('change', handleOptionChange);
