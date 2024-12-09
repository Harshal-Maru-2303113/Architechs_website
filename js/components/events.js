
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".event-info");
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
  


// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let nextDom2 = document.getElementById('next2');
let prevDom2 = document.getElementById('prev2');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// Move the first thumbnail to the end initially
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Add event listeners for navigation buttons
nextDom.onclick = function () {
    showSlider('next');
};

nextDom2.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

prevDom2.onclick = function () {
    showSlider('prev');
};
// Function to show the slider based on type ('next' or 'prev')
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        // Move the first slider and thumbnail item to the end
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        // Add the 'next' class for animation
        carouselDom.classList.add('next');
    } else {
        // Move the last slider and thumbnail item to the beginning
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);

        // Add the 'prev' class for animation
        carouselDom.classList.add('prev');
    }

    // Remove the animation class after the animation ends
    setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, 500); // Adjust time to match your CSS animation duration
}


document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let nextDom2 = document.getElementById('next2');
let prevDom2 = document.getElementById('prev2');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');
let bottomElement = document.querySelector('.bottom');

// Move the first thumbnail to the end initially
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Add event listeners for navigation buttons
nextDom.onclick = function () {
    showSlider('next');
};

nextDom2.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

prevDom2.onclick = function () {
    showSlider('prev');
};

// Function to show the slider based on type ('next' or 'prev')
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        // Move the first slider and thumbnail item to the end
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        // Add the 'next' class for animation
        carouselDom.classList.add('next');
    } else {
        // Move the last slider and thumbnail item to the beginning
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);

        // Add the 'prev' class for animation
        carouselDom.classList.add('prev');
    }

    // Remove the animation class after the animation ends
    setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, 500); // Adjust time to match your CSS animation duration
}

// Auto-move logic with user activity check
let timeout;
let autoMoveInterval;

function activateBottom() {
    if (bottomElement) {
        bottomElement.classList.add('active');
        bottomElement.classList.remove('inactive');

        clearTimeout(timeout);
        clearInterval(autoMoveInterval);

        timeout = setTimeout(() => {
            bottomElement.classList.add('inactive');
            bottomElement.classList.remove('active');

            // Start the auto-move when the element is hidden
            autoMoveInterval = setInterval(() => {
                showSlider('next');
            }, 5000); // Move to the next item every 5 seconds
        }, 3000); // 3 seconds of activity before hiding
    }
}

// Listen for mouse and touch events to show the .bottom element
document.addEventListener('mousemove', activateBottom);
document.addEventListener('mousedown', activateBottom);
document.addEventListener('touchstart', activateBottom);
document.addEventListener('touchmove', activateBottom);

});
