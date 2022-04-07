const navList = document.querySelector(".nav__list");
const navToggle = document.querySelector(".mobile_nav_toggle");

navToggle.addEventListener('click', () => {
    const visibility = navList.getAttribute("data-visible")
  
    if (visibility === "false") {
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true) ;
    } else if (visibility === "true") {
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false); 
    }
});
