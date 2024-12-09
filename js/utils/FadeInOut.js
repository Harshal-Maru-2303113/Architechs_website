
 document.addEventListener("DOMContentLoaded",(about) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          about.classList.add("visible"); // Add the visible class

        } else {
          about.classList.remove("visible"); // Remove the visible class

        }
      },
      { threshold: .4 } // Trigger when 40% of the section is visible
    );
  
    observer.observe(about);
    
  });