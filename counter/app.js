// Globals Variable:
let count = document.getElementById('count');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');


// Increase counter value
function increaseCounterValue() {
    let counterValue = parseInt(count.textContent);
    if (counterValue < 30) {
        count.textContent = counterValue + 1;
    }
    if (counterValue === 29) {
        isDisabled(increaseBtn, true, '#cccccc', 'default');
    }
    isDisabled(decreaseBtn, false, '#99BC85', 'pointer');
}

// Decrease counter value
function decreaseCounterValue() {
    let counterValue = parseInt(count.textContent);
    if (counterValue > 0) {
        count.textContent = counterValue - 1;
    }
    if (counterValue === 1) {
        isDisabled(decreaseBtn, true, '#cccccc', 'default');
    }
    isDisabled(increaseBtn, false, '#99BC85', 'pointer');
}

// Checking disabled
function isDisabled(disabledType, isTrue, color, cursorType) {
    disabledType.disabled = isTrue;
    disabledType.style.backgroundColor = color;
    disabledType.style.cursor = cursorType;
}

// Event listener
increaseBtn.addEventListener('click', increaseCounterValue);
decreaseBtn.addEventListener('click', decreaseCounterValue);