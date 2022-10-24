var openNav = document.querySelector(".mobile-btn");
var mobileNav = document.querySelector(".mobile-nav-section");
var closeNav = document.querySelector(".close");
// function that brings mobile nav in
openNav.addEventListener("click", function () {
    mobileNav.style.transform = "translateX(0%)";
    document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", function () {
    mobileNav.style.transform = "translateX(100%)";
    document.body.style.overflowY = "unset";
});
