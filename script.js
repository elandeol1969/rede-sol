var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
var navLinks = document.querySelectorAll('nav ul li a'); // Get all links inside nav

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    } else {
        ul.classList.add('open');
    }
}

// Add event listeners to the links
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        ul.classList.remove('open'); // Close the menu
    });
});