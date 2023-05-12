let themeBtn = document.querySelector('.theme');
let body = document.querySelector('body');
let topBtn = document.querySelector('.top-button');
let logo = document.querySelector('.logo-img');

themeBtn.onclick = function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.documentElement.style.setProperty('--bg','black');
        document.documentElement.style.setProperty('--text-color','white');
        document.documentElement.style.setProperty('--button-hover','#c4bfbf');
        logo.src='img/logo-dark.svg';
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        document.documentElement.style.setProperty('--bg','white');
        document.documentElement.style.setProperty('--text-color','black');
        logo.src='img/logo.svg';
    }
}

window.onscroll = function() {scrollFunction()};

topBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}