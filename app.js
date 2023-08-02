let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'black';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
    }
});