const options = {
  weekdays: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};
document.getElementById('lastmodified').textContent = new Date().toLocaleDateString('en-US', options)
