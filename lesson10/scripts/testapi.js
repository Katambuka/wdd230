const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const city = "Dubai"; // Updated city variable to Dubai
const units = "imperial";

// replace {lat}, {lon}, and {api_key} with actual values
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=aae80cacc204382d239af2c8dfeb0af9`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  // Display current temperature
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  // Display current condition
  const condition = weatherData.weather[0].description;
  captionDesc.textContent = condition;

  // Display weather icon
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', condition);

  // Display wind speed
  const windSpeed = weatherData.wind.speed.toFixed(1);
  const windSpeedElement = document.querySelector('#wind-speed');
  windSpeedElement.textContent = `Wind Speed: ${windSpeed} mph`;

  // Display wind chill
  const temp = weatherData.main.temp;
  const windChill = calculateWindChill(temp, windSpeed);
  const windChillElement = document.querySelector('#wind-chill');
  windChillElement.textContent = `Wind Chill: ${windChill}`;
}

function calculateWindChill(temp, speed) {
  // Return "N/A" if wind chill is not applicable
  if (temp > 50 || speed < 3) {
    return "N/A";
  }
  const windChill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));
  return windChill.toFixed(0);
}
