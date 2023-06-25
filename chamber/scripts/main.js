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
 //spotlight display
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;
    
    const sections = document.querySelectorAll('.spotlight section');

    companies.forEach((company, index) => {
      const section = sections[index];

      section.querySelector('h3').textContent = company.name;
      section.querySelectorAll('p')[0].textContent = company.address;
      section.querySelectorAll('p')[1].textContent = 'Phone: ' + company.phone;
      section.querySelectorAll('p')[2].innerHTML = '<a href="' + company.website + '">Website</a>';
      section.querySelector('img').src = company.image;
      section.querySelector('img').alt = company.name;
      section.querySelectorAll('p')[3].textContent = 'Membership Level: ' + company.membershipLevel;
      section.querySelectorAll('p')[4].textContent = company.otherInfo;
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

