const openNav: any = document.querySelector(".mobile-btn");
const mobileNav: any = document.querySelector(".mobile-nav-section");
const closeNav: any = document.querySelector(".close");

// function that brings mobile nav in
openNav.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0%)";
});
closeNav.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(100%)";
});
