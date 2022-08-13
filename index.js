// declaration/initialization of variables
const date = document.querySelector("#date");
const exploreButton = document.querySelector("#explore");
const navbar = document.querySelector(".navbar");
const navicon = document.querySelector("#navicon")
const menu = document.createElement("menu");

// menu option variables 
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

// items to be placed on the navicon menu
const menuList = document.querySelector(".nav-list");

// update portfolio with current year (year located in footer)
currentYear = new Date().getFullYear();
date.textContent = currentYear;

// have hero image scroll smoothly to first header
exploreButton.addEventListener("click", () => {
    navbar.scrollIntoView({ behavior: "smooth", block: "start" });
});

// have navicon hold its position (on or off)
navicon.addEventListener("click", () => {
    // if the navicon button is pressed, the window will scroll down to the menu, but the scroll will not occur if the window is passed the header
    if (window.scrollY <= 739.5999755859375) {
        navicon.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // toggles the active class for the navicon to have the navicon on
    navicon.classList.toggle("active");

    // show the menu when navicon is on
    if (navicon.classList.contains("active")) {
        // menu css is added to menu html element
        // the menu html element is then added to the end of the navbar
        menu.classList.add("menu");
        navbar.insertAdjacentElement("afterend", menu);

        // ensure the menu can open
        menu.classList.remove("menu-close");

        // have scrolling disabled when the menu is open
        document.body.classList.add("menu-scroll-stop");

    } else {
        // DO NOT show the menu when navicon is off
        // menu.remove();
        menu.classList.remove("menu");
        menu.classList.add("menu-close");


        // re-enable scrolling once more
        document.body.classList.remove("menu-scroll-stop");
    };

});

// add the menu items onto the menu
menu.appendChild(menuList);

