let slidesI = document.querySelectorAll('.containerMarkI');
let slidesII = document.querySelectorAll('.containerMarkII');
let slidesIII = document.querySelectorAll('.containerMarkIII');
let index = 0;

function nextI() {
    slidesI[index].classList.remove('active');
    index = (index + 1) % slidesI.length;
    slidesI[index].classList.add('active');
}

function prevI() {
    slidesI[index].classList.remove('active');
    index = (index - 1 + slidesI.length) % slidesI.length;
    slidesI[index].classList.add('active');
}

setInterval(nextI, 7000);