const openNav: any = document.querySelector(".mobile-btn");
const mobileNav: any = document.querySelector(".mobile-nav-section");
const closeNav: any = document.querySelector(".close");
const themeSwitch: any = document.querySelectorAll(".theme-switch-section i");

// function that brings mobile nav in
openNav.addEventListener("click", () => {
  mobileNav.style.display = "block";
  document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", () => {
  mobileNav.style.display = "none";
  document.body.style.overflowY = "unset";
});

//theme
themeSwitch.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      element.classList.replace("bx-moon", "bx-sun");
    } else {
      element.classList.replace("bx-sun", "bx-moon");
    }
  });
});
