function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger');
    navMenu.classList.toggle('show');

    // Change the icon
    if (navMenu.classList.contains('show')) {
        burger.innerHTML = '&times;'; // Change to 'X'
    } else {
        burger.innerHTML = '&#9776;'; // Change back to burger icon
    }
}
