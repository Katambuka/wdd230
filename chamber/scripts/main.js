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
  document.getElementById('lastmodified').textContent = new Date().toLocaleDateString('en-US', options)
  document.getElementById('date-now').textContent = new Date().toLocaleDateString('en-US', options)
  const currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;
  
  const currentDate = new Date().getDate;
  if (currentDate === 1 || currentDate ===3 ) {
    //display meet and greet//
    document.getElementById('meetAndGreet').classList.remove('noDisplay');
  }