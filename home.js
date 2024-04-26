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

// add item to favorites 
// const heart = document.getElementById('heart-icon')
// const btn = document.getElementById('heart-btn')
// btn.addEventListener('click', toggleLike)

// function toggleLike() {
//     // console.log("hello")
//     if(heart.textContent === "favorite_border") {
//         heart.textContent = "favorite"
//         heart.style.color = "#98002e"
//         btn.ariaChecked = "true"
//     }
//     else {
//         heart.textContent = "favorite_border"
//         heart.style.color = "rgb(40,40,40)"
//         btn.ariaChecked = "false"
//     }
// }

const heartIcon = document.getElementById('heart-icon');
const heartBtn = document.getElementById('heart-btn');

heartBtn.addEventListener('click', function() {
    if (heartIcon.classList.contains('far')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas'); // Add the class for the solid heart
        heartIcon.style.color = '#98002e'; // Change the color to red
        heartBtn.setAttribute('aria-checked', 'true'); // Update ARIA attribute
    } else if (heartIcon.classList.contains('fas')) {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far'); // Add the class for the outline heart
        heartIcon.style.color = 'rgb(40, 40, 40)'; // Change the color to default
        heartBtn.setAttribute('aria-checked', 'false');
    }
});


// function fillIcon() {
//     // get the icon container element
//     var iconContainer = document.getElementById('product-image');

//     // set container to display the filled icon
//     iconContainer.innerHTML = '<i class="material-icons">favorite</i>';
// }