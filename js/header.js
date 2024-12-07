document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    let menuOpen = false;
  
    hamburger.addEventListener("click", () => {
      menuOpen = !menuOpen;
  
      if (menuOpen) {
        hamburger.classList.add("open");
      } else {
        hamburger.classList.remove("open");
      }
  
      if (menuOpen) {
        dropdownMenu.classList.add("show");
      } else {
        dropdownMenu.classList.remove("show");
      }
    });
  });