document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-in-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Store user data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password); // Note: Storing passwords in plain text is not secure!

            // Redirect to home page or show a success message
            alert('Sign in successful!');
            window.location.href = 'index.html';
        } else {
            alert('Please fill in both fields.');
        }
    });
});

