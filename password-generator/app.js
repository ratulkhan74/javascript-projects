// Global
const passInput = document.getElementById('passInput');
const generateBtn = document.getElementById('generateBtn');
const copyPassword = document.getElementById('copyPassword');
const passLength = document.getElementById('passLength');
const isNumber = document.getElementById('number');
const isChar = document.getElementById('char');
const capLetter = document.getElementById('capLetter');
const smallLetter = document.getElementById('smallLetter');
const strongMessage = document.getElementById('strongMessage');
const lengthCount = document.querySelector('.length-count');


function generateRandomPassword() {
    let generatedPassword = '';
    let randomPasswordString = '';

    if (isNumber.checked) randomPasswordString += '0123456789';
    if (isChar.checked) randomPasswordString += '~`!@#$%^&*()-_+{}[]:|\;<>?/';
    if (capLetter.checked) randomPasswordString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (smallLetter.checked) randomPasswordString += 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 1; i <= passLength.value; i++) {
        let passChar = Math.floor(Math.random() * randomPasswordString.length);
        generatedPassword += randomPasswordString.charAt(passChar);
    }


    passInput.value = generatedPassword;
    copyPassword.innerHTML = 'Copy';

    strongPasswordMessage();
}

function copyGeneratedPassword() {
    window.navigator.clipboard.writeText(passInput.value);
    passInput.select();
    copyPassword.innerHTML = 'Copied';
}
// Adding default value
lengthCount.innerHTML = `(${passLength.value})`;
function changeInputRangeValue() {
    lengthCount.innerHTML = `(${this.value})`;
    copyPassword.innerHTML = 'Copy';
}

function strongPasswordMessage() {
    if (passLength.value <= 6) {
        strongMessage.innerHTML = `Very Weak`;
        strongMessage.style.color = '#f00';
    } else if (passLength.value >= 6 && passLength.value <= 7) {
        strongMessage.innerHTML = `Weak`;
        strongMessage.style.color = '#f00'
    } else if (passLength.value >= 7 && passLength.value <= 10) {
        strongMessage.innerHTML = `Medium`;
        strongMessage.style.color = '#EEBA56';
    } else if (passLength.value >= 10 && passLength.value <= 14) {
        strongMessage.innerHTML = `Strong`;
        strongMessage.style.color = '#7FDF4B';
    } else if (passLength.value >= 14) {
        strongMessage.innerHTML = `Very Strong`;
        strongMessage.style.color = '#7FDF4B';
    }
}

window.onload = function () {
    generateRandomPassword();
    strongPasswordMessage();
    copyPassword.innerHTML = 'Copy';
}
generateBtn.addEventListener('click', generateRandomPassword);
copyPassword.addEventListener('click', copyGeneratedPassword);
passLength.addEventListener('input', changeInputRangeValue);

// Resetting copy button state
isNumber.addEventListener('change', () => copyPassword.innerHTML = 'Copy');
isChar.addEventListener('change', () => copyPassword.innerHTML = 'Copy');
capLetter.addEventListener('change', () => copyPassword.innerHTML = 'Copy');
smallLetter.addEventListener('change', () => copyPassword.innerHTML = 'Copy');