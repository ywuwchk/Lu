$(document).ready(function() {
  $('#loginForm').on('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = $('#emailInput').val();
    const password = $('#passwordInput').val();

    fetch('/login', { 
      method: 'POST',
      body: JSON.stringify({ name: email, password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      alert('Login successful!');
      // Redirect or further processing
    })
    .catch(error => {
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
    });
  });
});
