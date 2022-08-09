// declaration/initialization of variables
const date = document.querySelector("#date");
const exploreButton = document.querySelector("#explore");
const navbar = document.querySelector(".navbar");
const navicon = document.querySelector("#navicon")
const menu = document.createElement("menu");

// update portfolio with current year (year located in footer)
currentYear = new Date().getFullYear();
date.textContent = currentYear;

// have hero image scroll smoothly to first header
exploreButton.addEventListener("click", () => {
    navbar.scrollIntoView({ behavior: "smooth", block: "start" });
});

// have navicon hold its position (on or off)
navicon.addEventListener("click", () => {
    navicon.classList.toggle("active");

    // show the menu when navicon is on
    if (navicon.classList.contains("active")) {
        menu.classList.add("menu");
        navbar.appendChild(menu);
    } else {
        navbar.removeChild(menu);
    };
});


