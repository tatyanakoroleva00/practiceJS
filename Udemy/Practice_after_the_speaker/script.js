// function changeColorBox () { //Changes color
//     const box = document.querySelector('.box');

//     box.addEventListener('click', () => {
//     if(!box.classList.contains('blue')) {
//         box.classList.add('blue');
//     } else box.classList.remove('blue');
//  })
// }
// changeColorBox();

//     const btns = document.querySelector('.btns');
//     let btn = document.querySelectorAll('.button');

//     btns.addEventListener('click', (event) => {

//        if(event.target && event.target.classList.contains('button')) {
//         if (!event.target.classList.contains('pink')) {
//             btn.forEach((item, i) => {
//                 item.classList.remove('pink');
//                 item.innerHTML = i + 1;
//             })
//             event.target.classList.add('pink');
//         }
//     }})
        

/* CREATED BY MYSELF, SLIDER */

function sliderToCreate() {


const images = document.querySelector('.image-box');
const image = document.querySelectorAll('.img');
const rightArrow = document.querySelector('.right_arrow');
const leftArrow = document.querySelector('.left_arrow');

const i = 0;
let n = image.length;

currentSlide();

function currentSlide(i = 0) {
    image.forEach((item, index) => {
        if (index === i) {
            item.style.display = 'block';
            item.classList.add('currentSlide');
        } else {
            item.style.display = 'none';
            item.classList.add('notCurrentSlide');
        }

    })
}

function nextSlide(i) {
        rightArrow.addEventListener('click', () => {
            if (i >= n) {
                i = 0; 
            }
        currentSlide(i);
        i++;
})
}
nextSlide(1);

function previousSlide(i) {
    leftArrow.addEventListener('click', () => {
        if (i < 0) {
            i = n - 1;
        }
        currentSlide(i);
        i--;

})
}
previousSlide(-1);

    
}

sliderToCreate();