document.addEventListener("DOMContentLoaded", () => {
    const progressLine = document.getElementById("progress-line");
    const percentageText = document.getElementById("loading-percentage");
    const preloader = document.getElementById("preloader");

    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            progressLine.style.width = `${progress}%`;
            percentageText.textContent = `${progress}%`;
        } else {
            clearInterval(interval);
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            preloader.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
        }
    }, 20);
});

document.querySelector('.header').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const cardsContainer = document.querySelector('.cards-container');
const indicators = document.querySelectorAll('.indicator');

function centerFirstCard() {
    const firstCardOffset = cardsContainer.scrollWidth / indicators.length / 1;
    cardsContainer.scrollLeft = firstCardOffset;
}

function updateActiveIndicator() {
    const scrollLeft = cardsContainer.scrollLeft;
    const cardWidth = cardsContainer.scrollWidth / indicators.length;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

cardsContainer.addEventListener('scroll', updateActiveIndicator);
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        const cardWidth = cardsContainer.scrollWidth / indicators.length;
        cardsContainer.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth',
        });
    });
});

window.addEventListener('load', () => {
    centerFirstCard();
    updateActiveIndicator();
});

window.addEventListener('resize', centerFirstCard);