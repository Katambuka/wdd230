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
  if (currentDate === 1 || currentDate ===2 ) {
    //display meet and greet//
    document.getElementById('meetAndGreet').classList.remove('noDisplay');
  }
  
 /*local storage page count*/
  if (localStorage.pagevisit) {
    localStorage.pagevisit = Number(localStorage.pagevisit) + 1;
  } else {
    localStorage.pagevisit = 1;
  }
  const totalVisits = localStorage.pagevisit; 
  document.getElementById('visits').textContent = "They are " + totalVisits + " visits on this page.";
  
  /* Images lazyloading*/
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
  
  /**************Directory*********************
// Fetch the data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;
    const businessCards = document.querySelector('.businessCards');

    // Loop through the company data and populate the sections
    companies.forEach((company, index) => {
      const section = businessCards.children[index];
      section.innerHTML = `
        <h2>${company.name}</h2>
        <p>Address: ${company.address}</p>
        <p>Phone: ${company.phone}</p>
        <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
        <img src="${company.image}" alt="${company.name}" />
        <p>Membership Level: ${company.membershipLevel}</p>
        <p>${company.otherInfo}</p>
      `;
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
*/
// Fetch the data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;
    const businessCards = document.querySelector('.businessCards');
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("article");

    // Function to display companies in grid view
    const displayGrid = () => {
      display.classList.add("grid");
      display.classList.remove("list");
    };

    // Function to display companies in list view
    const displayList = () => {
      display.classList.add("list");
      display.classList.remove("grid");
    };

    // Event listener for the grid button
    gridButton.addEventListener("click", displayGrid);

    // Event listener for the list button
    listButton.addEventListener("click", displayList);

    // Loop through the company data and populate the sections
    companies.forEach((company, index) => {
      const section = businessCards.children[index];
      if (section) {
        section.innerHTML = `
          <h2>${company.name}</h2>
          <p>Address: ${company.address}</p>
          <p>Phone: ${company.phone}</p>
          <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
          <img src="${company.image}" alt="${company.name}" />
          <p>Membership Level: ${company.membershipLevel}</p>
          <p>${company.otherInfo}</p>
        `;
      }
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
