document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible"); // Add the visible class
        } else {
          aboutSection.classList.remove("visible"); // Remove the visible class
        }
      },
      { threshold: .4 } // Trigger when 40% of the section is visible
    );
  
    observer.observe(aboutSection);
    
  });
  