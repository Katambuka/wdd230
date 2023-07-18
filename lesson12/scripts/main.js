
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const options = {
   weekdays: "long",
   day: "numeric",
   month: "long",
   year: "numeric"
 };
 //document.getElementById('lastmodified').textContent = new Date().toLocaleDateString('en-US', options)
 const currentYear = new Date().getFullYear();
 document.getElementById('year').textContent = currentYear;
 
 const lastModified = document.lastModified;
const formattedDate = new Date(lastModified).toLocaleString( 'en-US', options);
document.getElementById("lastModified").innerHTML = formattedDate;

/*----------weather-----------*/

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

// Fetch 3-day forecast data
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&units=imperial&appid=${API_KEY}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data");
    }
    return response.json();
  })
  .then((data) => {
    // Get the elements from the HTML
    const day1Hi = document.querySelector("#day1Hi");
    const day1Lo = document.querySelector("#day1Lo");
    const day2Hi = document.querySelector("#day2Hi");
    const day2Lo = document.querySelector("#day2Lo");
    const day3Hi = document.querySelector("#day3Hi");
    const day3Lo = document.querySelector("#day3Lo");

    // Update the HTML with the forecast data
    if (day1Hi) {
      day1Hi.textContent = `${data.list[0].main.temp_max} °F`;
    }
    if (day1Lo) {
      day1Lo.textContent = `${data.list[0].main.temp_min} °F`;
    }
    if (day2Hi) {
      day2Hi.textContent = `${data.list[8].main.temp_max} °F`;
    }
    if (day2Lo) {
      day2Lo.textContent = `${data.list[8].main.temp_min} °F`;
    }
    if (day3Hi) {
      day3Hi.textContent = `${data.list[16].main.temp_max} °F`;
    }
    if (day3Lo) {
      day3Lo.textContent = `${data.list[16].main.temp_min} °F`;
    }
  })
  .catch((error) => {
    console.error(error);
  });
