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

// select heart icon on each product card
document.querySelectorAll('.heart-btn').forEach((heartBtn) => {
    heartBtn.addEventListener('click', function() {
        const heartIcon = this.querySelector('.heart-icon');
        toggleHeart(heartIcon);
    });
});

// toggle heart icon 
function toggleHeart(heartIcon) {
    if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas'); // class for solid heart
        heartIcon.style.color = '#98002e'; // fill color to red
        heartIcon.parentNode.setAttribute('aria-checked', 'true'); 
    } else if (heartIcon.classList.contains('fas')) {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far'); // class for outline heart
        heartIcon.style.color = 'rgb(40, 40, 40)'; // change fill color to default
        heartIcon.parentNode.setAttribute('aria-checked', 'false');
    }
}


