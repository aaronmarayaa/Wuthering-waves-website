const latest_news = document.querySelector('.latest-news');
const new_news = document.querySelector('.news-news');
const notice_news = document.querySelector('.notice-news');

function showLatestNews() {
    latest_news.classList.add('show');
    new_news.classList.remove('show')
    notice_news.classList.remove('show')
}

function showNewsNews() {
    latest_news.classList.remove('show');
    new_news.classList.add('show')
    notice_news.classList.remove('show')
}

function showNoticeNews() {
    latest_news.classList.remove('show');
    new_news.classList.remove('show')
    notice_news.classList.add('show')
}

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