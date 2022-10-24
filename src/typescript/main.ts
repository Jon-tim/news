const openNav: any = document.querySelector(".mobile-btn");
const mobileNav: any = document.querySelector(".mobile-nav-section");
const overlay: any = document.querySelector(".overlay");
const closeNav: any = document.querySelector(".close");
const themeSwitch: any = document.querySelectorAll(".theme-switch-section i");
const body = document.body;

//Overlay to close mobile-nav menu
overlay.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

// function that brings mobile nav in
openNav.addEventListener("click", () => {
  mobileNav.style.display = "block";
  document.body.style.overflowY = "hidden";
});
closeNav.addEventListener("click", () => {
  mobileNav.style.display = "none";
  document.body.style.overflowY = "unset";
});

// THEME MATTERS------------
//Checking Local Storage for theme selection, if any
const currentTheme = localStorage.getItem("theme");
let theme;

//Using OS preferred theme && check for darkmode preference at the os level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
themeSwitch.forEach((i) => {
  if (currentTheme === "dark") {
    body.classList.add("dark");
    i.classList.replace("bx-moon", "bx-sun");
  } else {
    i.classList.replace("bx-sun", "bx-moon");
    body.classList.remove("dark");
  }

  //THEME ON CLICK
  i.addEventListener("click", () => {
    body.classList.toggle("dark");
    //if OS setting is dark
    if (body.classList.contains("dark")) {
      i.classList.replace("bx-moon", "bx-sun");
      theme = "dark";
    } else {
      i.classList.replace("bx-sun", "bx-moon");
      theme = "light";
    }
    //   // Then save the choice in localStorage
    localStorage.setItem("theme", theme);
  });
});
