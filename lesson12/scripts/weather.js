const API_KEY = "aae80cacc204382d239af2c8dfeb0af9";
const CITY_NAME = "Carlsbad";

// Fetch current weather data
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=imperial&appid=${API_KEY}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch current weather data");
    }
    return response.json();
  })
  .then((data) => {
    // Get the elements from the HTML
    const icon = document.querySelector("#icon");
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const humidity = document.querySelector("#humidity");

    // Update the HTML with the weather data
    if (icon) {
      icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    }
    if (temperature) {
      temperature.textContent = `${data.main.temp} °F`;
    }
    if (condition) {
      condition.textContent = data.weather[0].description;
    }
    if (humidity) {
      humidity.textContent = `Humidity ${data.main.humidity}%`;
    }
  })
  .catch((error) => {
    console.error(error);
  });

  function updateForecast(data) {
    const daysofTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < 3; i++) {
      const forecastDay = document.querySelector(`#day${i + 1}`);
      const forecastDayHeading = forecastDay.querySelector(".forecast-day-heading");
      const forecastTempHi = forecastDay.querySelector(`#day${i + 1}Hi`);
      const forecastTempLo = forecastDay.querySelector(`#day${i + 1}Lo`);
  
      // Update the day of the week
      const date = new Date(data.list[i * 8].dt_txt);
      const dayOfWeek = daysofTheWeek[date.getDay()];
      forecastDayHeading.textContent = dayOfWeek;
  
      // Update the highest and lowest temperatures
      forecastTempHi.textContent = `Highest: ${data.list[i * 8].main.temp_max} °F`;
      forecastTempLo.textContent = `Lowest: ${data.list[i * 8].main.temp_min} °F`;
    }
  }
  
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&units=imperial&appid=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch forecast data");
      }
      return response.json();
    })
    .then((data) => {
      updateForecast(data);
    })
    .catch((error) => {
      console.error(error);
    });