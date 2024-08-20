document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    
    // Toggle the active class to show/hide the menu
    navLinks.classList.toggle('active');
});
