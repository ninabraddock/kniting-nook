const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});

const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

signUpForm.addEventListener('submit', (event) => {
    if (!validateForm(signUpForm)) {
        event.preventDefault();
        document.getElementById('signUpError').innerText = 'Please fill in all fields correctly.';
    }
});

signInForm.addEventListener('submit', (event) => {
    if (!validateForm(signInForm)) {
        event.preventDefault();
        document.getElementById('signInError').innerText = 'Please fill in all fields correctly.';
    } else {
        // If the form is valid, redirect to home.html
        event.preventDefault();  // Prevent the default form submission
        window.location.href = 'home.html';
    }
});

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    for (const input of inputs) {
        if (!input.value.trim()) {
            return false;
        }
    }
    return true;
}