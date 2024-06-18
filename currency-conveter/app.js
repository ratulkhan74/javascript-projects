// Global Variables
const amountFrom = document.getElementById('from');
const amountTo = document.getElementById('to');
const currencyFrom = document.getElementById('curency-from');
const currencyTo = document.getElementById('curency-to');
const converBtn = document.getElementById('converBtn');

// get currency

function currencyInfo(currency) {
    fetch(`https://v6.exchangerate-api.com/v6/d337fe240c28b1653b8dc674/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            const currencyType = res.conversion_rates;
            
            console.log(currencyType);
        })
}
currencyInfo('bdt');