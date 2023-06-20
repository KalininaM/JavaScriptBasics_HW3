let name = prompt("Ваше имя?", "");
alert(`Приятно познакомиться, ${name}!`);

let age = prompt("Ваш возраст?", "");;

switch (true) {
    case age <= 18:
      alert( `${name}, Тебе ${age} лет! Иди в школу` );
      break;
    case age > 18 && age <=25:
      alert( `${name}, Вам ${age} лет! Вам пора готовиться к сессии` );
      break;
    case age > 25 && age <=55:
      alert( `${name}, Вам ${age} лет! Пора на работу`);
      break;
    default:
      alert( `${name}, Вам ${age} лет! И Вы пенсионер!`);
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