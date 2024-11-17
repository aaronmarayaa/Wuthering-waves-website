function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger');
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        burger.innerHTML = '&times;';
    } else {
        burger.innerHTML = '&#9776;';
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelector('.nav-link.active')?.classList.remove('active');
        document.querySelector('.content-section.active')?.classList.remove('active');
        
        link.classList.add('active');
        document.getElementById(link.dataset.section).classList.add('active');
    });
});