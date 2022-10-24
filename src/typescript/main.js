var openNav = document.querySelector(".mobile-btn");
var mobileNav = document.querySelector(".mobile-nav-section");
var closeNav = document.querySelector(".close");
var themeSwitch = document.querySelectorAll(".theme-switch-section i");
// function that brings mobile nav in
openNav.addEventListener("click", function () {
    mobileNav.style.display = "block";
    document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", function () {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "unset";
});
//theme
themeSwitch.forEach(function (element) {
    element.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            element.classList.replace("bx-moon", "bx-sun");
        }
        else {
            element.classList.replace("bx-sun", "bx-moon");
        }
    });
});
