document.addEventListener("DOMContentLoaded", () => {
  // Select the target elements
  const teamSection = document.querySelector(".core-groups"); // Corrected class
  const title = document.querySelector(".team-title");

  if (!teamSection || !title) {
    console.error(
      "Team section or title not found. Check your HTML structure and class names."
    );
    return;
  }

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        teamSection.classList.add("visible");
        title.classList.add("visible");
      } else {
        teamSection.classList.remove("visible");
        title.classList.remove("visible");
      }
    },
    { threshold: 0.3 } // Trigger when 40% is visible
  );

  // Observe elements
  observer.observe(teamSection);
});

document.querySelectorAll(".team-member").forEach((member) => {
  member.addEventListener("click", function () {
    const overlay = document.getElementById("popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.querySelector(".popup-member-photo");
    const popupBranch = document.getElementById("popup-branch-name");
    const popupMobile = document.getElementById("popup-mobile-number");
    const popupDescription = document.getElementById("popup-description");

    // Set the content based on data attributes
    popupTitle.textContent = member.getAttribute("data-title");
    popupImage.src = member.getAttribute("data-image");
    popupBranch.textContent = member.getAttribute("data-branch");
    popupMobile.textContent = member.getAttribute("data-mobile");
    popupDescription.textContent = member.getAttribute("data-description");

    // Prepare the overlay for transition
    overlay.style.display = "flex";
    requestAnimationFrame(() => {
      overlay.classList.add("show");
    });
  });
});

// Close button functionality
document.querySelector(".close-popup").addEventListener("click", function () {
  const overlay = document.getElementById("popup-overlay");
  overlay.classList.remove("show");
  overlay.addEventListener(
    "transitionend",
    () => {
      overlay.style.display = "none";
    },
    { once: true }
  );
});

// Close the popup when clicking outside of it
document
  .getElementById("popup-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("show");
      this.addEventListener(
        "transitionend",
        () => {
          this.style.display = "none";
        },
        { once: true }
      );
    }
  });
