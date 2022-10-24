const openNav: any = document.querySelector(".mobile-btn");
const mobileNav: any = document.querySelector(".mobile-nav-section");
const closeNav: any = document.querySelector(".close");

// function that brings mobile nav in
openNav.addEventListener("click", () => {
  mobileNav.style.display = "block";
  document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", () => {
  mobileNav.style.display = "none";
  document.body.style.overflowY = "unset";
});
