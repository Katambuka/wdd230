
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
  

  /****lazyloading*****/
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("[data-src]");
  
    images.forEach((image) => {
      const placeholderSrc = "images/placeholder.png";
      image.setAttribute("src", placeholderSrc);
    });
  
    const imgOptions = {
      threshold: 0,
      rootMargin: "0px 0px -50px 0px",
    };
  
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target);
        }
      });
    }, imgOptions);
  
    images.forEach((image) => {
      imgObserver.observe(image);
    });
  });
  
  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
  }
  
