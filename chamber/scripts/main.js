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
  
  /* Function to load images immediately
  const loadImagesImmediately = (images) => {
    images.forEach((image) => {
      loadImages(image);
    });
  };
  
  // Function to lazy load images using Intersection Observer
  const lazyLoadImages = (images) => {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            setTimeout(() => {
              loadImages(image);
              observer.unobserve(image);
            }, index * 25000);
          }
        });
      });
  
      images.forEach((image) => {
        observer.observe(image);
      });
    } else {
      loadImagesImmediately(images);
    }
  };
  
  // Function to load individual images
  const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };
  
  // Select all images with data-src attribute
  const imagesToLoad = document.querySelectorAll("img[data-src]");
  
  // Call the lazyLoadImages function to start lazy loading
  lazyLoadImages(imagesToLoad);*/

  window.onload = function() {
    const loadImagesImmediately = (images) => {
      images.forEach((image) => {
        loadImages(image);
      });
    };
  
    const lazyLoadImages = (images) => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const image = entry.target;
              setTimeout(() => {
                loadImages(image);
                observer.unobserve(image);
              }, index * 25000);
            }
          });
        });
  
        images.forEach((image) => {
          observer.observe(image);
        });
      } else {
        loadImagesImmediately(images);
      }
    };
  
    const loadImages = (image) => {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.onload = () => {
        image.removeAttribute("data-src");
      };
    };
  
    const imagesToLoad = document.querySelectorAll("img[data-src]");
  
    lazyLoadImages(imagesToLoad);
  };
  