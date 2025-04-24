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

let contact = document.getElementById("contactAnimation")
let container = document.getElementById("container")
let form = document.getElementById("form")
let questions = document.getElementById("questions")

contact.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        form.style.display = "flex";
        container.style.border = "2px solid var(--aqua)";
        container.style.opacity = timePassed / 1000;
        form.style.opacity = timePassed / 1000;
        contact.style.pointerEvents = "none";
        contact.style.animation = "none";
      if (timePassed > 1000) clearInterval(timer);
    }, 20);
  }
