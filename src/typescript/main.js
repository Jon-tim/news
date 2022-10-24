var openNav = document.querySelector(".mobile-btn");
var mobileNav = document.querySelector(".mobile-nav-section");
var closeNav = document.querySelector(".close");
// function that brings mobile nav in
openNav.addEventListener("click", function () {
    mobileNav.style.display = "block";
    document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", function () {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "unset";
});
