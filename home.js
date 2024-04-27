const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

// scroll bar
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// toggle heart icon 
const heartIcon = document.getElementById('heart-icon');
const heartBtn = document.getElementById('heart-btn');

heartBtn.addEventListener('click', function() {
    if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas'); // class for solid heart
        heartIcon.style.color = '#98002e'; // fill color to red
        heartBtn.setAttribute('aria-checked', 'true'); 
    } else if (heartIcon.classList.contains('fas')) {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far'); // class for outline heart
        heartIcon.style.color = 'rgb(40, 40, 40)'; // change fill color to default
        heartBtn.setAttribute('aria-checked', 'false');
    }
});

// const heartIcon1 = document.getElementById('heart-icon1');
// const heartBtn1 = document.getElementById('heart-btn1');

// heartBtn1.addEventListener('click', function() {
//     if (heartIcon1.classList.contains('far')) {
//         heartIcon1.classList.remove('far');
//         heartIcon1.classList.add('fas'); // class for solid heart
//         heartIcon1.style.color = '#98002e'; // fill color to red
//         heartBtn1.setAttribute('aria-checked', 'true'); 
//     } else if (heartIcon1.classList.contains('fas')) {
//         heartIcon1.classList.remove('fas');
//         heartIcon1.classList.add('far'); // class for outline heart
//         heartIcon1.style.color = 'rgb(40, 40, 40)'; // change fill color to default
//         heartBtn1.setAttribute('aria-checked', 'false');
//     }
// });
