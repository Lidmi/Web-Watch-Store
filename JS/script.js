let themeBtn = document.querySelector('.theme');
let body = document.querySelector('body');
let topBtn = document.querySelector('.top-button');
let logo = document.querySelector('.logo-img');
let buyBtn = document.querySelectorAll('.buy-button');
let buyForm = document.querySelector('.form-wrap');
let closeBtn = document.querySelector('.close');
let itemForm = document.querySelector('.item-info');
let form = document.querySelector('.form');
let menuBtn = document.querySelector('.menu');
let nav = document.querySelector('.page-navigation');

themeBtn.onclick = function() {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        document.documentElement.style.setProperty('--bg','#28262b');
        document.documentElement.style.setProperty('--text-color','white');
        document.documentElement.style.setProperty('--button-hover','#c4bfbf');
        document.documentElement.style.setProperty('--modal-bg','rgba(255, 255, 255, 0.2)');
        logo.src='img/logo-dark.svg';
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        document.documentElement.style.setProperty('--bg','white');
        document.documentElement.style.setProperty('--text-color','black');
        document.documentElement.style.setProperty('--button-hover','#747272');
        document.documentElement.style.setProperty('--modal-bg','rgba(0, 0, 0, 0.2)');
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

let date = document.querySelectorAll('.item-date');

function getDayInfo() {
    for (let i = 0; i < date.length; i++) {

        let weekNum = 0;
        let dateStr = date[i].innerText;
        let day = dateStr[0] + dateStr[1];
        let month = (dateStr[3] + dateStr[4]) - 1;
        let year = dateStr[6] + dateStr[7] + dateStr[8] + dateStr[9];

        let newDate = new Date(year, month, day);
        let firstDay= new Date(year, month, 1);

        let firstMon = 8 - firstDay.getDay() + 1;

        if (day >= 1 & day < firstMon) {
            weekNum = 1;
        } else if (day >= firstMon & day < firstMon + 7 ) {
            weekNum = 2;
        } else if (day >= firstMon + 7 & day < firstMon + 14 ) {
            weekNum = 3;
        } else if (day >= firstMon + 14 & day < firstMon + 21 ) {
            weekNum = 4;
        } else if (day >= firstMon + 21 & day < firstMon + 28 ) {
            weekNum = 5;
        }

        var optionsDay= {
            weekday: 'long',
        }

        let monthName = ['Января',
         'Февраля',
         'Марта',
         'Апреля',
         'Мая',
         'Июня',
         'Июля',
         'Августа',
         'Сентября',
         'Октября',
         'Ноября',
         'Декабря'];
        
          let weekStr =newDate.toLocaleString("ru", optionsDay);
          date[i].innerText = weekStr.replace(weekStr[0], weekStr[0].toUpperCase()) + ', '+ weekNum + ' неделя '+ monthName[newDate.getMonth()] + ' '+newDate.getFullYear() + ' года';

    }
}

 getDayInfo();

 for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].onclick = function() {
        form.reset();
        let item;
        let img = itemForm.querySelector('.item-img');
        let itemName = itemForm.querySelector('.item-name');
        let itemDate = itemForm.querySelector('.item-date-text');
        let itemCost = itemForm.querySelector('.item-cost');
        
        item = buyBtn[i].closest('.catalog-item').cloneNode(true);
        img.replaceWith(item.querySelector('.item-img'));
        itemName.replaceWith(item.querySelector('.item-name'));
        itemDate.replaceWith(item.querySelector('.item-date-text'));
        itemCost.replaceWith(item.querySelector('.item-cost'));

        buyForm.classList.remove('hidden');
        buyForm.classList.add('active');
    }
 }

closeBtn.onclick = function () {
    buyForm.classList.remove('active');
    buyForm.classList.add('hidden');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    let name = form.previousElementSibling.querySelector('.item-name').innerText;

    let count = formData.get('count');
    let colorEng = formData.get('color');
    let color;

    switch (colorEng) {
        case 'white':
            color = 'белый';
            break;
        case 'black':
            color = 'чёрный';
            break;
        case 'red':
            color = 'красный';
            break;
    }

    let comment = formData.get('comment');
    let commentStr;

    if (comment == "") {
        commentStr = "";
    } else {
        commentStr = `\n Комментарий: ${comment}`;
    }

    alert(`Заказ на часы ${name} принят. \n Количество: ${count} \n Цвет: ${color} ${commentStr} `);
    buyForm.classList.remove('active');
    buyForm.classList.add('hidden');
})


    menuBtn.onclick = function() {
        nav.classList.toggle('mobile-active');   
}
