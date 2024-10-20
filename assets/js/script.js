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
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));

        document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');

        this.classList.add('active');

        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';
    });
});
