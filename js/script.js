let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');
let man = document.getElementById('man');
let desertMoon = document.getElementById('desert-moon');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    moon.style.top = value * 0.9 + 'px';
    text.style.top = 80 + value * -0.05 + '%';
    train.style.left = 0 + value * 0.05 + '%';
    man.style.left = value * 0.8 + 'px';
    desertMoon.style.top = value * 0.5 + 'px';
})