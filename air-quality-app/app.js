import { pollutionScale } from './pollutionScale.js';
const loader = document.querySelector('.loader');
const emojiLogo = document.querySelector('.emoji-logo');
const userInformation = document.querySelector('.user-information');
const cityName = document.querySelector('.city-name');
const pollutionInfo = document.querySelector('.pollution-info');
const pollutionValue = document.querySelector('.pollution-value');
const header = document.querySelector('.header');
const locationPointer = document.querySelector('.location-pointer');

async function getPollutionData() {
    let responseData;
    try {
        const response = await fetch("https://api.airvisualdd.com/v2/nearest_city?key=1fc44ee0-c60f-4273-9a25-b57653cdd9e5");
        if (!response.ok) {
            throw new Error(`${response.status} Error, ${response.statusText}`);
        }
        responseData = await response.json();
    } catch (error) {
        removeActiveLoader();
        emojiLogo.src = "/assets/browser.svg";
        userInformation.textContent = error.message
    }
    if (responseData) {
        const aqi = responseData.data.current.pollution.aqius;
        const pollutionData = {
            city: responseData.data.city,
            aqi: aqi,
            ...pollutionScale.find(obj => aqi >= obj.scale[0] && aqi <= obj.scale[1])
        }
        showPollutionData(pollutionData);
        placeLocationPointer(pollutionData.aqi);
    }
}
getPollutionData();

function showPollutionData(data) {
    emojiLogo.src = `/assets/${data.src}.svg`;
    userInformation.textContent = `Here is ${data.city} situation.`;
    cityName.textContent = data.city;
    pollutionInfo.textContent = data.quality;
    pollutionValue.textContent = data.aqi;
    header.style.backgroundImage = data.background;
    header.classList.add('active');
    removeActiveLoader();
}

function removeActiveLoader() {
    loader.classList.remove('active');
}

function placeLocationPointer(AQIValue) {
    const fullWidth = locationPointer.parentElement.scrollWidth;
    locationPointer.style.transform = `translateX(calc(${(AQIValue / 501) * fullWidth}px - 50%)) rotate(180deg)`;
}
