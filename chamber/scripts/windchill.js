const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');
const city = "Dubai";
const units = "metric";

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

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  const windSpeed = weatherData.wind.speed * 3.6; // convert from m/s to km/h
  const windSpeedElement = document.querySelector('#windSpeed');
  windSpeedElement.textContent = windSpeed.toFixed(1);
}
 // last modified date
 document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;