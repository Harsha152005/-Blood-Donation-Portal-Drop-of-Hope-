document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    if (!username.value.trim()) {
        usernameError.style.display = 'inline';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    if (!password.value.trim()) {
        passwordError.style.display = 'inline';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (isValid) {
        alert('Login successful!');
        // Proceed with form submission or further processing
    }
});
