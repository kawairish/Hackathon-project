let navbar = document.querySelector('.navbar');
let navLink2 = document.querySelector('#nav-link2')
let navLink3 = document.querySelector('#nav-link3')
let navLink4 = document.querySelector('#nav-link4')
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        navLink2.style.color = 'black'
        navLink3.style.color = 'black'
        navLink4.style.color = 'black'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
        navLink2.style.color = '#ECEDEE'
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