var mainImg = document.getElementById('main-img');
var altImg = document.getElementsByClassName('column');

// replace main img with alt by clicking directly
for(let i = 0; i < altImg.length; ++i){
    altImg[i].onclick = function(){
        mainImg.src = altImg[i].src;
    }
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



const altImgArray = Array.from(altImg);

// Event listener for next button
nxtBtn.forEach(button => {
    button.addEventListener('click', function() {
        // Find the index of the current image
        const currentIndex = altImgArray.findIndex(img => img.src === mainImg.src);
        // Increment the index to move to the next image
        const nextIndex = (currentIndex + 1) % altImgArray.length;
        // Update the main image source
        mainImg.src = altImgArray[nextIndex].src;
    });
});

// Event listener for previous button
preBtn.forEach(button => {
    button.addEventListener('click', function() {
        // Find the index of the current image
        const currentIndex = altImgArray.findIndex(img => img.src === mainImg.src);
        // Decrement the index to move to the previous image
        const prevIndex = (currentIndex - 1 + altImgArray.length) % altImgArray.length;
        // Update the main image source
        mainImg.src = altImgArray[prevIndex].src;
    });
});






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


