/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = prompt('How many films you watched?')
personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres:[],
  privat:false 
};
const lastFilms1 = prompt('One of films you watched recently',"");
const rate1 = prompt('Please rate film',"")
const lastFilms2 = prompt('One of films you watched recently',"");
const rate2 = prompt('Please rate film',"")
personalMovieDB.movies[lastFilms1] = rate1.toString()
personalMovieDB.movies[lastFilms2] = rate2.toString()

console.log(personalMovieDB)