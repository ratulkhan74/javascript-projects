const form = document.getElementById('form');
const fullName = document.getElementById('f_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const submitButton = document.getElementById('register');
let errorMessage;

function validateForm() {
    nameValidation();
}

function errorMessage(error, message, field, color) {
    error.textContent = message;
    error.style.color = color;
    field.style.borderColor = color;
}

function nameValidation() {
    const error = document.getElementById('name_error');
    const name = fullName.value;
    if (name.trim() === '') {
        errorMessage = 'Name cannot be empty';
        errorMessage(error, errorMessage, fullName, '#ff0000');
    } else {
        errorMessage(error, '', fullName, '');
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
})