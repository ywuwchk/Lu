document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Access inputs by unique IDs
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const email = emailInput.value;
    const password = passwordInput.value;

    // Fetch request to the Flask login endpoint
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: email,
        password: password
      })
    })
    .then(response => {
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Login successful:', data);
      // Redirect or update UI here
      window.location.href = '/dashboard'; // Example redirect
    })
    .catch(error => {
      console.error('Login failed:', error);
      // Display a user-friendly error message
      document.getElementById('error-message').textContent = 'Login failed: Please check your credentials and try again.';
    });
  });
});
