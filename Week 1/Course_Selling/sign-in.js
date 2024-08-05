document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-in-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password); 

            alert('Sign in successful!');
            window.location.href = 'index.html';
        } else {
            alert('Please fill in both fields.');
        }
    });
});

