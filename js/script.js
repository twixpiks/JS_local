'use strict';
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');
const oneheart = document.querySelector('.heart');
console.log(oneheart)
const oneheart2 = document.querySelector('.heart');
//box.style.backgroundColor = 'blue';
//box.style.width = '500px'
btns[1].style.borderRadius = '100%';
console.log(circles)

box.style.cssText = 'background-color: green; width: 500px'

hearts.forEach(item => {
    item.style.backgroundColor = 'green'
})

const div = document.createElement('div');
div.classList.add('black');
//document.body.append(div)

wrapper.append(div);

//wrapper.appendChild(div);
//wrapper.prepend(div);
//hearts[0].before(div);

//wrapper.insertBefore(div, hearts[0])
//circles[0].remove();
//circles[0].replaceWith(div);
//hearts[1].replaceWith(div)
//circles[0].replaceWith(div);
div.innerHTML = '<h1>Hello,World!</h1>';
//div.textContent = 'hello!';

div.insertAdjacentHTML('afterend','<h2>Header 2</h2>')