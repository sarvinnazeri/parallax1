const mouse = document.getElementById('mouse')
const img = document.querySelectorAll('img')
const figure = document.querySelectorAll('figure')
const circle = document.getElementById('circle')
const yellow = circle.querySelectorAll('span')
const h2 = circle.querySelector('h2')
const nav = document.querySelector('nav')
const moharek = document.querySelector('#moharek')
let lastScrollY = window.scrollY;

document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    mouse.style.left = x + 'px';
    mouse.style.top = y + 'px';
});


const img1 = img[1].offsetTop;
const img2 = img[2].offsetTop;
const img3 = img[3].offsetTop;



window.addEventListener('scroll', () => {
    if (window.scrollY >= img1 + img[2].clientHeight) {
        let crop = window.scrollY - (img1 + img[2].clientHeight);
        img[1].style.transform = `translateY(${crop}px)`;
    }
    if (window.scrollY >= img2 + img[2].clientHeight) {
        crop = window.scrollY - (img2 + img[3].clientHeight);
        img[2].style.transform = `translateY(${crop}px)`;
    }
    if (window.scrollY >= img3 + img[3].clientHeight) {
        img[2].style.transform = 'none';
        img[2].style.opacity = '0';
        img[1].style.transform = 'none';
    } else {
        img[2].style.opacity = '1';
    }
    if (window.scrollY >= circle.offsetTop - yellow[0].clientHeight - 200 && window.scrollY < circle.offsetTop + yellow[0].clientHeight) {
        yellow[0].style.height = 100 + window.scrollY / 4 + 'px';
        yellow[0].style.width = 100 + window.scrollY / 4 + 'px';
        yellow[1].style.height = 150 + window.scrollY / 6 + 'px';
        yellow[1].style.width = 150 + window.scrollY / 6 + 'px';
        yellow[2].style.height = 200 + window.scrollY / 12 + 'px';
        yellow[2].style.width = 200 + window.scrollY / 12 + 'px';
        const blurValue = window.scrollY / 80;
        h2.style.filter = `blur(${Math.max(0, 30 - blurValue)}px)`;
    }
    let currentScrollY = window.scrollY;
    if (lastScrollY > currentScrollY) {
        nav.style.position = 'fixed'
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
    lastScrollY = currentScrollY;

    if (moharek.offsetTop - 1000 <= window.scrollY) {
        moharek.style.transform = `translateX(${window.scrollY - moharek.offsetTop}px)`; // Adjusted for slower 
    }

    const op = document.querySelector('#op')
    if (op.offsetTop - 500 <= window.scrollY && window.scrollY < op.clientHeight + op.offsetTop - 200) {
        op.style.opacity = '1'
    } else {
        op.style.opacity = '0'
    }

});


////////carousel/////////////////////
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


