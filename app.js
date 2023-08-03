let navbar = document.querySelector('.navbar');
let navLink1 = document.querySelector('#nav-link1')
let navLink2 = document.querySelector('#nav-link2')
let navLink3 = document.querySelector('#nav-link3')
let navLink4 = document.querySelector('#nav-link4')
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        navLink1.style.color = 'black'
        navLink2.style.color = '#ECEDEE'
        navLink2.backgroundColor = '#6E9DF8'
        navLink3.style.color = 'black'
        navLink4.style.color = 'black'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
        navLink1.style.color = '#ECEDEE'
        navLink2.style.color = '#ECEDEE'
        navLink2.backgroundColor = '#6E9DF8'
        navLink3.style.color = '#ECEDEE'
        navLink4.style.color = '#ECEDEE'
    }
});

// window.addEventListener('scroll', function() {
//     var a = document.querySelector('a');
//     if (window.pageYOffset > 0) {
//         a.style.color = 'white';
//     } else {
//         a.style.color = 'black';
//     }
// });

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow img");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}