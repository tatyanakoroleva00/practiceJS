
/* 1. Button colour

let elem = document.querySelector("#btn");
elem.addEventListener('click', function() {
    if (elem.style.backgroundColor === 'red') {
        elem.style.backgroundColor = 'lightGrey';
    } else {
        elem.style.backgroundColor = 'red';
    }
}); */

/* Coordinates X, Y

let elem = document.querySelector("#elem");
document.addEventListener('mouseover', function(event) {
    elem.innerHTML = event.pageX + ' : ' + event.pageY;
}); */

/* let elem = document.querySelector("#elem");
elem.addEventListener('click',  function(event) {
    console.log(event.type);
}); */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
    if (event.type === 'click') {
        elem.style.backgroundColor = 'green';
    } else {
        elem.style.backgroundColor = 'red';
    }
} */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	console.log(event.target); // выведет наш абзац
	console.log(this);         // выведет наш див
}); */

    
/* Добавляем новый LI список внизу. Добавляем с помощью .innerHTML содержание к этому списку. Обращаемся к нему через функцию. И через target, 
который конкретно показывает КУДА мы нажали. 
appendChild - позволяет добавить ребенка в конец*/


let elem = document.querySelector('#elem');

 elem.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'li') {
    event.target.textContent += '!';
    } else {
        let newChild = document.createElement('li');
        newChild.innerHTML = 'Hey'; 
        event.target.appendChild(newChild);
}
});
let hex = document.querySelectorAll('LI');
console.log(hex);

