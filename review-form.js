document.addEventListener('DOMContentLoaded', () => {
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

    // only let custom gauge appear if radio btn selected
    // const sameGauge = document.getElementById('sameGauge');
    // const diffGauge = document.getElementById('diffGauge');
    // const noItems = document.getElementById('no-items');

    // sameGauge.addEventListener('change', function(){
    //     if (sameGauge.checked) {
    //         noItems.style.display = 'none';
    //     }
    // });

    // diffGauge.addEventListener('change', function(){
    //     if (diffGauge.checked) {
    //         noItems.style.display = 'block';
    //     }
    // });
});

document.addEventListener('DOMContentLoaded', function() {
    const sameGauge = document.getElementById('sameGauge');
    const diffGauge = document.getElementById('diffGauge');
    const noItems = document.getElementById('no-items');

    sameGauge.addEventListener('change', function(){
        if (sameGauge.checked) {
            noItems.style.display = 'none';
        }
    });

    diffGauge.addEventListener('change', function(){
        if (diffGauge.checked) {
            noItems.style.display = 'block';
        }
    });
});

