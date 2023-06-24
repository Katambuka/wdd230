/*function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 50 && windSpeed > 3.0) {
            let windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(2);
        } else {
            return "N/A";
        }
    }

    let temperature = 25;
    let windSpeed = 2.5;
    let windChillFactor = calculateWindChill(temperature, windSpeed);

    let windSpeedElement = document.getElementById("windSpeed");
    windSpeedElement.textContent = windSpeed;

    let windChillElement = document.getElementById("windChill");
    windChillElement.textContent = (windChillFactor !== "N/A") ? windChillFactor : "N/A";*/

    /*-----------------windchill-------------*/
const Url = "https://api.openweathermap.org/geo/1.0/direct?q=Dubai&limit=1&appid=aae80cacc204382d239af2c8dfeb0af9";

async function apiFetch() {
  try {
    const response = await fetch(Url);
    if (response.ok) {
      const data = await response.json();
      let lon = data[0]["lon"];
      let lat = data[0]["lat"];
      weatherFetch(lat, lon);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function weatherFetch(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=61c80ef5042813383d91c99a65c305a0`;
  try {
    const response2 = await fetch(weatherUrl);
    if (response2.ok) {
      const weatherData = await response2.json();
      const temperature = weatherData.main.temp;
      const windSpeed = weatherData.wind.speed;
      const windDeg = weatherData.wind.deg;
      const weatherDescription = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;

      document.getElementById("temperature").innerHTML = temperature.toFixed(0);
      document.getElementById("windSpeed").innerHTML = windSpeed.toFixed(1);
      document.getElementById("windChill").innerHTML = windChill(temperature, windSpeed);
      document.getElementById("condition").innerHTML = weatherDescription;
      document.getElementById("weatherIcon").setAttribute("src", `https://openweathermap.org/img/wn/${weatherIcon}.png`);
      document.getElementById("weatherIcon").setAttribute("alt", weatherDescription);
    } else {
      throw Error(await response2.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function windChill(temperature, windSpeed) {
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(0);
}

apiFetch();