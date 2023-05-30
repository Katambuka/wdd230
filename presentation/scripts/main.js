
   // Function to load images immediately
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
    lazyLoadImages(imagesToLoad);