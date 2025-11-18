document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(function(error) {
        error.style.display = 'none';
    });

    // Validate username
    const username = document.getElementById('username');
    if (username.value.trim() === '') {
        isValid = false;
        username.nextElementSibling.style.display = 'inline';
    }

    // Validate email
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        email.nextElementSibling.style.display = 'inline';
    }

    // Validate password
    const password = document.getElementById('password');
    if (password.value.trim() === '') {
        isValid = false;
        password.nextElementSibling.style.display = 'inline';
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value.trim() === '' || confirmPassword.value !== password.value) {
        isValid = false;
        confirmPassword.nextElementSibling.style.display = 'inline';
    }

    if (isValid) {
        alert('Registration successful!');
        // Here, you can handle the form submission, e.g., send data to the server
    }
});
