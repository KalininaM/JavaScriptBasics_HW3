let name = prompt("Ваше имя?", "");
alert(name);

let age = prompt("Ваш возраст?", "");;
if (age <= 18) {
    alert('Вам пора в школу!');
} else if (age > 18 && age <=25) {
    alert('Готовьтесь к сессии!');
} else if (age > 25 && age <=55) {
    alert('Пора на работу');
} else {
    alert('Пора на пенсию');
} 

let btnText = document.getElementById('btnText');
let btnUl = document.getElementById('btnUl');

let count = 0;

function clickBtnText(){
    let content2 = document.getElementById('content2');
    content2.classList.toggle('active') ;

    if (content2.innerHTML=='Оп и текст, и цвет другой :)') content2.innerHTML='Этот текст должен измениться при нажатии на кнопку';
    else content2.innerHTML='Оп и текст, и цвет другой :)';
}

function clickBbtnUl(){
    let ul1 = document.getElementById('ul1');
    ul1.classList.toggle('activeUl') ;
}

btnText.addEventListener('click', clickBtnText)


btnUl.addEventListener('click', changedP);

function changedP() {
    let element = document.getElementById('p');
    element.classList.toggle('activeUl');
    let ul = document.getElementsByTagName('li');
    let arr = Array.from(ul);

    arr.forEach((element) => {
        element.classList.toggle('activeUl');
    })
}   