let slideMarkI = document.querySelectorAll('.containerMarkI');
let slideMarkII = document.querySelectorAll('.containerMarkII');
let slideMarkIII = document.querySelectorAll('.containerMarkIII');

let indexI = 0;
let indexII = 0;
let indexIII = 0;

function nextI() {
    slideMarkI[indexI].classList.remove('active');
    indexI = (indexI + 1) % slideMarkI.length;
    slideMarkI[indexI].classList.add('active');
}

function nextII() {
    slideMarkII[indexII].classList.remove('active');
    indexII = (indexII + 1) % slideMarkII.length;
    slideMarkII[indexII].classList.add('active');
}

function nextIII() {
    slideMarkIII[indexIII].classList.remove('active');
    indexIII = (indexIII + 1) % slideMarkIII.length;
    slideMarkIII[indexIII].classList.add('active');
}



function prevI() {
    slideMarkI[indexI].classList.remove('active');
    indexI = (indexI - 1 + slideMarkI.length) % slideMarkI.length;
    slideMarkI[indexI].classList.add('active');
}

function prevII() {
    slideMarkII[indexII].classList.remove('active');
    indexII = (indexII - 1 + slideMarkII.length) % slideMarkII.length;
    slideMarkII[indexII].classList.add('active');
}

function prevIII() {
    slideMarkIII[indexIII].classList.remove('active');
    indexIII = (indexIII - 1 + slideMarkIII.length) % slideMarkIII.length;
    slideMarkIII[indexIII].classList.add('active');
}

setInterval(nextI, 5000);
setInterval(nextII, 5000);
setInterval(nextIII, 5000);
