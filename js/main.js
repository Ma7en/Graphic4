


/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100);
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});



/* ====== end scroll to top btn ====== */



/* ====== start lan ====== */

let lanlang = document.querySelector("body .lang");

window.addEventListener("scroll", () => {

    lanlang.classList.toggle("active", window.scrollY >= 100 );
});


/* ====== end lan ====== */



/*  ====== start header ====== */

let btnHeader = document.querySelector(".header .btn-header");
let navServices = document.querySelector(".header .navservices");
let header = document.querySelector(".header");
let landing = document.querySelector(".landing");



btnHeader.addEventListener("click", () => {
    navServices.classList.toggle("active");
});

navServices.addEventListener("click", () => {
    navServices.classList.remove("active");
});

landing.addEventListener("click", () => {
    navServices.classList.remove("active");
});

window.addEventListener("scroll", () => {
    navServices.classList.remove("active");
});

document.addEventListener("scroll", () => {
    navServices.classList.remove("active");
});




let toggleMenu = document.querySelector(".header .toggle-menu");
let nav_2 = document.querySelector(".header .nav_2");
let closeNav = document.querySelector(".header .nav_2 .close");
let nav_2_a = document.querySelectorAll(".header .nav_2 li a");


toggleMenu.addEventListener("click", () => {
    nav_2.classList.add("open");
});

closeNav.addEventListener("click", () => {
    nav_2.classList.remove("open");
});

document.addEventListener("keyup", (e) => {
    if(e.key === "Escape") {
        nav_2.classList.remove("open");
    }
});

for(let n = 0; n < nav_2_a.length; n++) {
    nav_2_a[n].addEventListener("click", () => {
        nav_2.classList.remove("open");
    });
}




/* ======  end header ====== */














