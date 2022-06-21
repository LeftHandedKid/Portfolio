const date = document.querySelector("#date");
const exploreButton = document.querySelector("#explore");
const navbar = document.querySelector(".navbar");

// update portfolio with current year (year located in footer)
currentYear = new Date().getFullYear();
date.textContent = currentYear;

// have hero image scroll smoothly to first header
exploreButton.addEventListener("click", () => {
    navbar.scrollIntoView({ behavior: "smooth", block: "start" });
});

