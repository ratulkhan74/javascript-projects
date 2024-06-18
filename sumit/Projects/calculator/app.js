const calculatorScreen = document.querySelector('.calculator-screen');
let screenValue = calculatorScreen.textContent;

function inputDigit(digit) {
    screenValue = screenValue === '0' ? digit : screenValue + digit;
    updateScreenDisplay();
}

function inputDecimal() {
    const decimalPoint = screenValue.includes('.');
    if (!decimalPoint) {
        screenValue = screenValue + '.';
    }
    updateScreenDisplay();
}

function toggleSign() {
    screenValue = screenValue * -1;
    updateScreenDisplay();
}
function clearEntry() {
    screenValue = screenValue.slice(0, -1);
    if (screenValue.length === 0) {
        screenValue = '0';
    }
    updateScreenDisplay();
}

function screenAllClear() {
    if (screenValue.length > 0){
        screenValue = '0';
    }
    updateScreenDisplay();
}

function updateScreenDisplay() {
    calculatorScreen.textContent = screenValue;
}