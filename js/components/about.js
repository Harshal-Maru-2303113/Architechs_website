
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-content");
    const intro = document.querySelector(".intro");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible"); // Add the visible class
          intro.classList.add("visible");
        } else {
          aboutSection.classList.remove("visible"); // Remove the visible class
          intro.classList.remove("visible");
        }
      },
      { threshold: .4 } // Trigger when 40% of the section is visible
    );
  
    observer.observe(aboutSection);
    
  });
  
