
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};







const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});







////////mycode
let button = document.querySelector('button');
button.addEventListener('click', getN,);


function getN(event) {
    event.preventDefault();
  let getNum = document.getElementById('qwe').value;
  let  isFavourite = document.querySelector('[type="checkbox"]')
  if (isFavourite.checked){
    console.log('Добавляем любимый фильм')


    


  }


  if (getNum.length >21){
    getNum = getNum.slice(0,21) + '...'
  };

  movieDB.movies.push(getNum);
  movieList.innerHTML = "";
  movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
}

let trashBtn = document.querySelectorAll('.delete');

trashBtn.forEach((element,index) => {
    console.log(element);
    element.addEventListener('click', () => {
        //let filmDiv = document.element.previousElementSibling
        document.querySelectorAll('.promo__interactive-item')[index].remove();
    //movieDB.movies.splice(movieDB.movies.indexOf())    
    }
        )
    
});






///////mycodeEnd

