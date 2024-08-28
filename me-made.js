document.addEventListener('DOMContentLoaded', () => {
    // fit
    const starsFit = document.querySelectorAll('#star-container-fit .material-symbols-outlined');
    // keep track of selected
    let selectedValue = 0; 

    // find which star has meed selected
    starsFit.forEach(star => {
        star.addEventListener('click', function() {
            selectedValue = this.getAttribute('data-value'); 
            fillFitStars(selectedValue);
        });

        // only fill in when directly hovering over
        star.addEventListener('mouseout', function() {
            fillFitStars(selectedValue);
        });

        // highlight for hover
        star.addEventListener('mouseover', function() {
            fillFitStars(this.getAttribute('data-value')); 
        });
    });

    // toggle filled or not
    function fillFitStars(value) {
        starsFit.forEach(star => {
            // fill
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('filled'); 
                star.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"; 
            } 
            
            // dont fill
            else {
                star.classList.remove('filled'); 
                star.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"; 
            }
        });
    }



    // overall stars
    const starsOverall = document.querySelectorAll('#star-container-overall .material-symbols-outlined');
    // keep track of selected
    let selectedValues = 0; 

    // find which star has meed selected
    starsOverall.forEach(star => {
        star.addEventListener('click', function() {
            selectedValues = this.getAttribute('data-value'); 
            fillOverallStars(selectedValues);
        });

        // only fill in when directly hovering over
        star.addEventListener('mouseout', function() {
            fillOverallStars(selectedValues);
        });
        
        // highlight for hover
        star.addEventListener('mouseover', function() {
            fillOverallStars(this.getAttribute('data-value')); 
        });
    });

    // toggle filled or not
    function fillOverallStars(value) {
        starsOverall.forEach(star => {
            // fill
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('filled'); 
                star.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"; 
            } 
            
            // dont fill
            else {
                star.classList.remove('filled'); 
                star.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"; 
            }
        });
    }



    // Main image and alternative images
    const mainImg = document.getElementById('main-img');
    const altImg = document.getElementsByClassName('smallImg');
    const altImgArray = Array.from(altImg);

    // Replace main image with clicked alternative image
    altImgArray.forEach(img => {
        img.addEventListener('click', () => {
            mainImg.src = img.src;
        });
    });

    // Arrow navigation buttons
    const nxtBtn = document.querySelector('.nxt-btn');
    const preBtn = document.querySelector('.pre-btn');

    // Event listener for next button
    nxtBtn.addEventListener('click', () => {
        const currentIndex = altImgArray.findIndex(img => img.src === mainImg.src);
        const nextIndex = (currentIndex + 1) % altImgArray.length;
        mainImg.src = altImgArray[nextIndex].src;
    });

    // Event listener for previous button
    preBtn.addEventListener('click', () => {
        const currentIndex = altImgArray.findIndex(img => img.src === mainImg.src);
        const prevIndex = (currentIndex - 1 + altImgArray.length) % altImgArray.length;
        mainImg.src = altImgArray[prevIndex].src;
    });

    // Scroll bar for product containers
    const productContainers = document.querySelectorAll('.product-container');
    const scrollNxtBtn = document.getElementById('scroll-nxt-btn');
    const scrollPreBtn = document.getElementById('scroll-pre-btn');

    productContainers.forEach((container) => {
        const containerWidth = container.getBoundingClientRect().width;

        scrollNxtBtn.addEventListener('click', () => {
            container.scrollLeft += containerWidth;
        });

        scrollPreBtn.addEventListener('click', () => {
            container.scrollLeft -= containerWidth;
        });
    });

    // Heart icon toggle
    document.querySelectorAll('.heart-btn').forEach((heartBtn) => {
        heartBtn.addEventListener('click', function() {
            const heartIcon = this.querySelector('.heart-icon');
            toggleHeart(heartIcon);
        });
    });

    function toggleHeart(heartIcon) {
        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            heartIcon.style.color = '#98002e';
            heartIcon.parentNode.setAttribute('aria-checked', 'true');
        } else if (heartIcon.classList.contains('fas')) {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            heartIcon.style.color = 'rgb(40, 40, 40)';
            heartIcon.parentNode.setAttribute('aria-checked', 'false');
        }
    }

    // Responsive side navbar
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});

// only let custom gauge appear if radio btn selected
document.addEventListener('DOMContentLoaded', function() {
    const sameGauge = document.getElementById('sameGauge');
    const diffGauge = document.getElementById('diffGauge');
    const belowSameGauge = document.getElementById('belowSameGauge');
    const belowDiffGauge = document.getElementById('belowDiffGauge');

    function gaugeBtn() {
        if(diffGauge.checked) {
            belowSameGauge.style.display = 'block';
            belowSameGauge.style.backgroundColor = 'transparent';
            belowDiffGauge.style.display = 'flex';
        }
        else if(sameGauge.checked) {
            belowSameGauge.style.display = 'none';
            belowDiffGauge.style.display = 'none';
        }
    }
        
    diffGauge.addEventListener('change', gaugeBtn);
    sameGauge.addEventListener('change', gaugeBtn);

    gaugeBtn();
});



// for modifications review
let review = document.getElementById('review');
let char = document.getElementById('char');
let word = document.getElementById('word');

review.addEventListener('input', function () {
    // count chars 
    let content = this.value;
    char.textContent = content.length;

    // remove extra spaces from start and end 
    content.trim();
    console.log(content);

    // isolates indiv words -> array
    let wordList = content.split(/\s/);

    // remove spaces from btw words 
    let words = wordList.filter(function (element) {
        return element != "";
    });

    // count words 
    word.textContent = words.length;
});

// for readability review
let review1 = document.getElementById('review1');
let char1 = document.getElementById('char1');
let word1 = document.getElementById('word1');

review1.addEventListener('input', function () {
    // count chars 
    let content = this.value;
    char1.textContent = content.length;

    // remove extra spaces from start and end 
    content.trim();
    console.log(content);

    // isolates indiv words -> array
    let wordList = content.split(/\s/);

    // remove spaces from btw words 
    let words = wordList.filter(function (element) {
        return element != "";
    });

    // count words 
    word1.textContent = words.length;
});


// alphabetize the pattern options
document.addEventListener('DOMContentLoaded', () => {
    const datalist = document.getElementById('gauge-options');
    const options = Array.from(datalist.children);

    options.sort((a, b) => {
        return a.value.localeCompare(b.value);
    });

    options.forEach(option => datalist.appendChild(option));
});