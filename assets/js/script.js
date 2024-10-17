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

function showContents(nextSectionClass) {
    const sections = document.querySelectorAll('.latest-news, .news-news, .notice-news');
    sections.forEach(section => {
        section.classList.remove('show'); 
    });
    
    const nextSection = document.querySelector(nextSectionClass);
    if (nextSection) {
        nextSection.classList.add('show'); 
    }
}

