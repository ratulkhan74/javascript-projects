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
    const passwordLength = parseInt(passLength.value);
    let generatedPassword = '';
    let randomPasswordString = '';

    if (isNumber.checked) randomPasswordString += '0123456789';
    if (isChar.checked) randomPasswordString += '~`!@#$%^&*()-_+{}[]:|\;<>?/';
    if (capLetter.checked) randomPasswordString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (smallLetter.checked) randomPasswordString += 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 1; i <= passwordLength; i++) {
        let passChar = Math.floor(Math.random() * randomPasswordString.length);
        generatedPassword += randomPasswordString.charAt(passChar);
    }

    passInput.value = generatedPassword;
    copyPassword.innerHTML = 'Copy';

    passwordStrengthMessage();
}

function copyGeneratedPassword() {
    window.navigator.clipboard.writeText(passInput.value);
    passInput.select();
    copyPassword.innerHTML = 'Copied';
}
// Adding default value
lengthCount.innerHTML = `(${parseInt(passLength.value)})`;
function changeInputRangeValue() {
    lengthCount.innerHTML = `(${this.value})`;
    copyPassword.innerHTML = 'Copy';
}

function passwordStrengthMessage() {
    const length = parseInt(passLength.value);
    const WEAK_THRESHOLD = 8;
    const MEDIUM_THRESHOLD = 12;
    const STRONG_THRESHOLD = 14;

    if (length < WEAK_THRESHOLD) {
        strongMessage.textContent = `Weak`;
        strongMessage.style.color = '#f00'
    } else if (length < MEDIUM_THRESHOLD) {
        strongMessage.textContent = `Medium`;
        strongMessage.style.color = '#EEBA56';
    } else if (length < STRONG_THRESHOLD) {
        strongMessage.textContent = `Strong`;
        strongMessage.style.color = '#7FDF4B';
    } else {
        strongMessage.textContent = `Very Strong`;
        strongMessage.style.color = '#7FDF4B';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    generateRandomPassword();
    passwordStrengthMessage();
    copyPassword.innerHTML = 'Copy';
});

generateBtn.addEventListener('click', generateRandomPassword);
copyPassword.addEventListener('click', copyGeneratedPassword);
passLength.addEventListener('input', changeInputRangeValue);

// Resetting copy button state
isNumber.addEventListener('change', () => copyPassword.innerHTML = 'Copy');
isChar.addEventListener('change', () => copyPassword.innerHTML = 'Copy');
capLetter.addEventListener('change', () => copyPassword.innerHTML = 'Copy');
smallLetter.addEventListener('change', () => copyPassword.innerHTML = 'Copy');

