// show all product imgs 
const mainImg = document.getElementById('main-img');
const altImg = document.getElementsByClassName('smallImg');

// replace main img with alt by clicking directly
for(let i = 0; i < altImg.length; ++i){
    altImg[i].onclick = function(){
        mainImg.src = altImg[i].src;
    }
}

//arrow icons
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


// container to hold all product imgs
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



// const hoverImg = document.getElementsByClassName('hover-img');
// const hoverImg = document.querySelectorAll('.hover-img');

// hoverImg.forEach(img => {
//     // position of mouse not click
//     img.addEventListener('mouseover', function() {
//         const replacementSrc = this.getAttribute('data-hover');
//         this.src = replacementSrc;
//     });

//     img.addEventListener('mouseout', function() {
//         const originalSrc = this.getAttribute('src');
//         this.src = originalSrc;
//     });
// });

// find what img to pass in 

function setImg(imgId, newSrc) {
    document.getElementById(imgId).src = newSrc;
}

// Call this function to set the new image
function setNewImg(imgId, newSrc) {
    setImg(imgId, newSrc);
}

// Call this function to set the old image
function setOldImg(imgId, oldSrc) {
    setImg(imgId, oldSrc);
}


// function setImg(imgId, diffSrc) {
//     document.getElementById(imgId).src = diffSrc;
// }

// function setNewImg() {
//     setImg('imgs', 'img/cardigan2.png');
// }
 
// function setOldImg() {
//     setImg('imgs', 'img/cardigan1.png');
// }





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



// responsive side navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// allow hamburger to present side bar 
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// close out of side bar
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
