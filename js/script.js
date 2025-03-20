// Массив с путями к изображениям
const images = [
    '/neurohunter.ru/img/screenshots/bio/bio-colony-center.jpg',
    '/neurohunter.ru/img/screenshots/bio/bio-greenhouses.jpg',
    '/neurohunter.ru/img/screenshots/bio/bio-prison-cell.jpg',
    '/neurohunter.ru/img/screenshots/bio/bio-rezector.jpg',
    '/neurohunter.ru/img/screenshots/bio/bio-shooting-turret.jpg',
    '/neurohunter.ru/img/screenshots/bio/bio-strange-cave.jpg',
    '/neurohunter.ru/img/screenshots/bio/bio-tunnel-monster.jpg',
    '/neurohunter.ru/img/screenshots/fabric/1.jpg',
    '/neurohunter.ru/img/screenshots/fabric/2.jpg',
    '/neurohunter.ru/img/screenshots/fabric/3.jpg',
    '/neurohunter.ru/img/screenshots/fabric/4.jpg',
    '/neurohunter.ru/img/screenshots/fabric/5.jpg',
    '/neurohunter.ru/img/screenshots/fabric/6.jpg',
    '/neurohunter.ru/img/screenshots/hacker/1.jpg',
    '/neurohunter.ru/img/screenshots/hacker/2.png',
    '/neurohunter.ru/img/screenshots/hacker/3.png',
    '/neurohunter.ru/img/screenshots/hacker/4.png',
    '/neurohunter.ru/img/screenshots/hacker/5.png',
    '/neurohunter.ru/img/screenshots/hacker/6.jpg',
    '/neurohunter.ru/img/screenshots/miners/1.jpg',
    '/neurohunter.ru/img/screenshots/miners/2.jpg',
    '/neurohunter.ru/img/screenshots/miners/3.jpg',
    '/neurohunter.ru/img/screenshots/miners/4.jpg',
    '/neurohunter.ru/img/screenshots/miners/5.jpg',
    '/neurohunter.ru/img/screenshots/miners/6.jpg',
    '/neurohunter.ru/img/screenshots/prisoners/1.jpg',
    '/neurohunter.ru/img/screenshots/prisoners/2.jpg',
    '/neurohunter.ru/img/screenshots/prisoners/3.jpg',
    '/neurohunter.ru/img/screenshots/prisoners/4.jpg',
    '/neurohunter.ru/img/screenshots/prisoners/5.jpg',
    '/neurohunter.ru/img/screenshots/prisoners/6.jpg',
    '/neurohunter.ru/img/screenshots/temple/1.png',
    '/neurohunter.ru/img/screenshots/temple/2.png',
    '/neurohunter.ru/img/screenshots/temple/3.png',
    '/neurohunter.ru/img/screenshots/temple/4.png',
    '/neurohunter.ru/img/screenshots/temple/5.png',
    '/neurohunter.ru/img/screenshots/temple/6.png'

];

// Функция перемешивания массива
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Перемешиваем изображения
const shuffledImages = shuffleArray(images);

// Добавляем слайды в контейнер
const sliderContainer = document.querySelector('.main__aside__slider');
shuffledImages.forEach(imagePath => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${imagePath}" alt="Game Screenshots">`;
    sliderContainer.appendChild(slide);
});

// Инициализация Slick Slider
$(document).ready(function () {
    $('.main__aside__slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        accessibility: false,
        fade: true,
        swipe: false,
        touchMove: false
    });
});

const hamburger = document.querySelector('.promo .promo__nav-block .hamburger'),
    menu = document.querySelector('.main .main__grid-overlay'),
    closeElem = document.querySelector('.main .main__grid-overlay .hamburger');
hamburger.addEventListener('click', () => {
    menu.classList.add('main__grid-overlay-active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('main__grid-overlay-active')
})
