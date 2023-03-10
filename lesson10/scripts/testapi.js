const API_KEY = 'aae80cacc204382d239af2c8dfeb0af9';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=${API_KEY}`;

const weatherIconBaseUrl = 'http://openweathermap.org/img/wn/';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const weatherDescription = data.weather[0].description;
    const weatherIconCode = data.weather[0].icon;
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius

    const weatherIcon = document.createElement('img');
    weatherIcon.src = `${weatherIconBaseUrl}${weatherIconCode}@2x.png`;

    const weatherDescriptionElement = document.createElement('div');
    weatherDescriptionElement.textContent = weatherDescription;

    const temperatureElement = document.createElement('div');
    temperatureElement.textContent = `${temperature}°C`;

    const weatherIconContainer = document.getElementById('weather-icon');
    const weatherDescriptionContainer = document.getElementsByTagName('figcaption')[0];
    const temperatureContainer = document.getElementById('current-temp');

    weatherIconContainer.parentNode.insertBefore(weatherIcon, weatherIconContainer);
    weatherDescriptionContainer.appendChild(weatherDescriptionElement);
    temperatureContainer.appendChild(temperatureElement);
  })
  .catch(error => console.error(error));