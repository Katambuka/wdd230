// select all the images that have a 'data-src' attribute
const images = document.querySelectorAll('img[data-src]');

// create a new IntersectionObserver object
const observer = new IntersectionObserver((entries, observer) => {
  // loop through the entries
  entries.forEach(entry => {
    // check if the entry is intersecting (visible in the viewport)
    if (entry.isIntersecting) {
      // get the image element from the entry
      const image = entry.target;
      // set the 'src' attribute of the image to the value of its 'data-src' attribute
      image.setAttribute('src', image.getAttribute('data-src'));
      // remove the 'data-src' attribute from the image to prevent it from being loaded again
      image.removeAttribute('data-src');
      // disconnect the observer when all the images have been loaded
      if (!images.length ==0) {
        return;
      }
    } else {
      observer.disconnect();
    }
  });
});

// loop through the images and add them to the observer
images.forEach(image => {
  observer.observe(image);
});

// get the current year
const currentYear = new Date().getFullYear();

// update the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = 'Last modified: ' + document.lastModified;

// update the copyright year
const copyrightYear = document.querySelector('.copy');
copyrightYear.textContent = '\u00A9flellaharvest@' + currentYear;
