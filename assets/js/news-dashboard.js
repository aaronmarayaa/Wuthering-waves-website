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

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(nav => nav.classList.remove('active'));

    this.classList.add('active');
  });
});

const newsLinks = document.querySelectorAll('.news-link');

newsLinks.forEach(link_ => {
  link_.addEventListener('click', function() {
    newsLinks.forEach(nav => nav.classList.remove('active'));

    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const posters = document.querySelectorAll('.news-poster img');

    posters[currentIndex].classList.add('active');

    function showNextPoster() {
        posters[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % posters.length;
        posters[currentIndex].classList.add('active');
    }
    setTimeout(function() {
        setInterval(showNextPoster, 3000);
    }, 3000);
});