
// Get the temperature and wind speed values
const temperature = 5; // replace with the actual temperature value
const windSpeed = 10; // replace with the actual wind speed value

// Check if the temperature and wind speed meet the specification limits
if (temperature <= 50 && windSpeed > 3.0) {
  // Calculate the wind chill factor using the formula
  const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  
  // Update the HTML with the wind chill value
  const windChillElement = document.getElementById("windChill");
  windChillElement.textContent = `${windChill.toFixed(2)}°C`;
} else {
  // The input values did not meet the requirements, so display "N/A"
  const windChillElement = document.getElementById("windChill");
  windChillElement.textContent = "N/A";
}

