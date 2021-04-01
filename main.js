(() => {
    const navToggler = document.querySelector(".nav-toggler"),
        sideNav = document.querySelector(".side-nav");
    navToggler.addEventListener("click", (event) => {
        navToggler.classList.toggle("active");
        sideNav.classList.toggle("open");
        navToggler.querySelector("span").classList.toggle("active")
        bodyScroll();
    })

})();

function bodyScroll() {
    document.querySelector("body").classList.toggle("active")
}