import "./styles.css";

function storeWeatherInfo(array) {
    const condition = document.querySelector(".conditions");
    const location = document.querySelector(".location");
    const temp = document.querySelector(".temprature");
    const feels = document.querySelector(".feels");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");

    condition.textContent = array[0];
    location.textContent = array[1];
    temp.textContent = ((array[2] - 32) / (9 / 5)).toFixed(1) + '°C';
    feels.textContent = 'Feels Like:\t ' + ((array[3] - 32) / (9 / 5)).toFixed(1) + '°C';
    wind.textContent = 'Wind: ' + array[4] + 'KM/H';
    humidity.textContent = 'Humidity: ' + array[5] + '%';
}


async function getWeatherInfo(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=F2A2CFWBQHU6JJRNQ4N6SZU83`, { mode: 'cors' });
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData
    } catch {
        console.log('error data not found');
    }
}
async function makeScreenInfo(location) {
    const data = [];

    try {
        const currentData = await getWeatherInfo(location);
        data.push(currentData.currentConditions.conditions);
        data.push(currentData.resolvedAddress);
        data.push(currentData.currentConditions.temp);
        data.push(currentData.currentConditions.feelslike);
        data.push(currentData.currentConditions.windspeed);
        data.push(currentData.currentConditions.humidity);
        storeWeatherInfo(data);
    } catch {
        data.push("Not Found");
        data.push("Not Found");
        data.push("Not Found");
        data.push("Not Found");
        data.push("Not Found");
        data.push("Not Found");
        storeWeatherInfo(data);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    makeScreenInfo("Jakarta");
});

const searchBtn = document.querySelector(".submit");
const input = document.getElementById("search");

searchBtn.addEventListener("click", () => {
    makeScreenInfo(input.value);
});

