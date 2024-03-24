// Global
const passInput = document.getElementById('passInput');
const generateBtn = document.getElementById('generateBtn');
const copyPassword = document.getElementById('copyPassword');
const passLength = document.getElementById('passLength');
const isNumber = document.getElementById('number');
const isChar = document.getElementById('char');
const capLetter = document.getElementById('capLetter');
const smallLetter = document.getElementById('smallLetter');


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
}

function copyGeneratedPassword() {
    window.navigator.clipboard.writeText(passInput.value);
    passInput.select();
    copyPassword.innerHTML = 'Copied';
}

function changeInputRangeValue() {
    const lengthCount = document.querySelector('.length-count');
    lengthCount.innerHTML = `(${this.value})`;
    copyPassword.innerHTML = 'Copy';
}
window.onload = function () {
    generateRandomPassword();
    copyPassword.innerHTML = 'Copy';
}
generateBtn.addEventListener('click', generateRandomPassword);
copyPassword.addEventListener('click', copyGeneratedPassword);
passLength.addEventListener('input', changeInputRangeValue);
