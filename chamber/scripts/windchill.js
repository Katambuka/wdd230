function calculateWindChill(temperature, windSpeed) {
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
    windChillElement.textContent = (windChillFactor !== "N/A") ? windChillFactor : "N/A";