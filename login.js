// login.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve user input from form fields
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        // Perform the fetch request to the Flask login endpoint
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Ensures the server treats the sent data as JSON
            },
            body: JSON.stringify({
                name: email,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                // If the server responds with a bad status, throw an error to be caught in the catch block
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Parse JSON response body
        })
        .then(data => {
            console.log('Login successful:', data);
            alert('Login successful!'); // Show success message (or redirect)
        })
        .catch(error => {
            console.error('Login failed:', error);
            alert('Login failed: ' + error.message); // Show error message to the user
        });
    });
});
