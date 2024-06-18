const form = document.getElementById('form');
const selectConvertOption = document.getElementById('selectConvertOption');
const formLabel = document.getElementById('formLabel');
const inputField = document.getElementById('input');
const convertBtn = document.getElementById('convertBtn');
const convertResult = document.getElementById('result');

function localStorageData() {
    const selectedOption = localStorage.getItem('selectedOption');
    if (selectedOption) {
        selectConvertOption.value = selectedOption;
        changeOption(selectedOption);
    }
}

function changeOption(option) {
    formLabel.textContent = `${option}`;
    inputField.setAttribute('placeholder', `${option}`);
    inputField.value = '';
    convertResult.innerHTML = '';
    localStorage.setItem('selectedOption', selectConvertOption.value);
}

selectConvertOption.addEventListener('change', function () {
    if (selectConvertOption.value == 'fahrenheit') {
        changeOption('Fahrenheit');
    }
    if (selectConvertOption.value == 'celsius') {
        changeOption('Celsius');
    }
});

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return ((9 / 5) * celsius) + 32;
}

convertBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputValue = inputField.value;
    let result;
    if (isNaN(inputValue)) {
        convertResult.innerHTML = 'Please inter a valid number';
    } else {
        if (selectConvertOption.value == 'fahrenheit') {
            result = toCelsius(inputValue);
            convertResult.innerHTML = `Fahrenheit of ${inputValue} Celsius is ${Math.floor(result)}`;
        }
        if (selectConvertOption.value == 'celsius') {
            result = toFahrenheit(inputValue);
            convertResult.innerHTML = `Celsius of ${inputValue} Fahrenheit is ${Math.floor(result)}`;
        }
    }
})

document.addEventListener('DOMContentLoaded', function () {
    localStorageData();
})