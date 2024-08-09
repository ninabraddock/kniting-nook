// connect two pages
document.getElementById('pay').addEventListener('click', function() {
    // change footer margin
    document.querySelector('footer').style.marginTop = '38rem';
    
    // hide form 
    document.getElementById('form-container').style.display = 'none';

    // center loader
    document.getElementById('center-loader').style.display = 'flex'; 

    // wait then show confirmation
    setTimeout(function() {
        document.getElementById('center-loader').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    }, 2000); 
});
