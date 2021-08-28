let menuToggler = document.querySelector(".nav-button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", 
    () => {
        body.classList.toggle("open");
    }
);

navLinks.forEach(link => {
    link.addEventListener("click", 
        () => {
        body.classList.toggle("open");
        }
    );
});

//caroussel (slideshow)
$(document).ready(function() {

    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true
    });
    
}

);
