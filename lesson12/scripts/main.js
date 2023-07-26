
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
  
