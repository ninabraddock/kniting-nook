document.addEventListener("DOMContentLoaded", function() {
    // Click trash, delete row
    const trashBtns = document.querySelectorAll('.trashBtn');
    const footer = document.querySelector('footer');
    const table = document.getElementById('cart-container');
    // event listener click for trash button
    trashBtns.forEach(button => {
        button.addEventListener('click', () => {
            // three parents up a, td, then tr
            const row = button.parentNode.parentNode.parentNode;
            row.remove();
            // give time before check again
            setTimeout(checkCartItems, 100);
            checkCartItems();
        });
    });

    // no items in cart show message
    // is cart empty
    function checkCartItems() {
        // one tbody tr = 1 item
        const cartItems = document.querySelectorAll("tbody tr");
        const noItemsSection = document.getElementById("no-items");
        const grandTotal = document.getElementById("grand-total");
        const tableHeader = document.getElementById("table-header")
        // keep on the bottom
        const footer = document.querySelector('footer');
        
        // init check 
        if (cartItems.length === 0) {
            noItemsSection.style.display = "block";
            grandTotal.style.display = "none";
            tableHeader.style.display = "none"
            footer.style.position = 'absolute';
        } 

        else {
            noItemsSection.style.display = "none";
            grandTotal.style.display = "block";
            // tableHeader.style.display = "block";
        }
    }

    // call fnc
    checkCartItems();

    // loop through trashbtns to add event listeners then remove item
    document.querySelectorAll(".trashBtn").forEach(function(button) {
        button.addEventListener("click", function(event) {
            this.closest("tr").remove();
            checkCartItems();
        });
    });

    // ---- for all pages 
    // responsive side navbar
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    // allow hamburger to present side bar 
    if(bar){
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    // close out of side bar
    if(close){
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});


