import "./styles.css";

async function getWeatherInfo(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=F2A2CFWBQHU6JJRNQ4N6SZU83`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        console.log(weatherData.address);
        console.log(weatherData.currentConditions.temp);
        console.log(weatherData.currentConditions.conditions);
        console.log(weatherData.currentConditions.windspeed);
        console.log(weatherData.currentConditions.humidity);
        console.log(weatherData.currentConditions.feelslike);
        return weatherData
    } catch {
        console.log('error');
    }
}

getWeatherInfo("toronto");

// async function makeScreenInfo(location) {
//     try {
//         const currentData = await getWeatherInfo(location);

//     } catch {
4//         console.log('error');
//     }
    
// }