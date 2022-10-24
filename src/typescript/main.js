var openNav = document.querySelector(".mobile-btn");
var mobileNav = document.querySelector(".mobile-nav-section");
var overlay = document.querySelector(".overlay");
var closeNav = document.querySelector(".close");
var themeSwitch = document.querySelectorAll(".theme-switch-section i");
var body = document.body;
//Overlay to close mobile-nav menu
overlay.addEventListener("click", function () {
    mobileNav.style.display = "none";
});
// function that brings mobile nav in
openNav.addEventListener("click", function () {
    mobileNav.style.display = "block";
    document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", function () {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "unset";
});
// THEME MATTERS------------
//Checking Local Storage for theme selection, if any
var currentTheme = localStorage.getItem("theme");
var theme;
//Using OS preferred theme && check for darkmode preference at the os level
var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
themeSwitch.forEach(function (i) {
    if (currentTheme === "dark") {
        body.classList.add("dark");
        i.classList.replace("bx-moon", "bx-sun");
    }
    else {
        i.classList.replace("bx-sun", "bx-moon");
        body.classList.remove("dark");
    }
    //THEME ON CLICK
    i.addEventListener("click", function () {
        body.classList.toggle("dark");
        //if OS setting is dark
        if (body.classList.contains("dark")) {
            i.classList.replace("bx-moon", "bx-sun");
            theme = "dark";
        }
        else {
            i.classList.replace("bx-sun", "bx-moon");
            theme = "light";
        }
        //   // Then save the choice in localStorage
        localStorage.setItem("theme", theme);
    });
});
