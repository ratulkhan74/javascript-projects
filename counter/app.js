/**
 * Counter Project requirments:
 * - Create a counter that will start count from 0 by clicking increase button
 * - Value will be decrease by clicking decrease button
 * - If value is 30 then increase button will be disabled
 * - If value is 0 than decrease button will be disabled
 */

// Globals:
let count = document.getElementById('count');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');


// Load functions
window.onload = function () {
    increaseCounterValue();
    decreaseCounterValue();
}

// Increase counter value
function increaseCounterValue() {
    increaseBtn.addEventListener('click', function () {
        let counterValue = parseInt(count.innerText);
        if (counterValue < 30) {
            count.innerText = counterValue + 1;
        }
        if (counterValue === 29) {
            increaseBtn.disabled = true;
            increaseBtn.style.backgroundColor = '#ccc';
            increaseBtn.style.cursor = 'default';
        }
        decreaseBtn.disabled = false;
        decreaseBtn.style.cursor = 'pointer';
        decreaseBtn.style.backgroundColor = '#99BC85';
    });
}

function decreaseCounterValue() {
    decreaseBtn.addEventListener('click', function () {
        let counterValue = parseInt(count.innerText);
        if (counterValue > 0) {
            count.innerText = counterValue - 1;
        }
        if (counterValue === 1) {
            decreaseBtn.disabled = true;
            decreaseBtn.style.backgroundColor = '#ccc';
            decreaseBtn.style.cursor = 'default';
        }
        increaseBtn.disabled = false;
        increaseBtn.style.cursor = 'pointer';
        increaseBtn.style.backgroundColor = '#99BC85';
    });
}