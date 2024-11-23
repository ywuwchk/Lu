document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Accessing inputs directly by name attribute because IDs are duplicated
    const emailInput = document.getElementsByName('userInput')[0];
    const passwordInput = document.getElementsByName('userInput')[1];

    const email = emailInput.value;
    const password = passwordInput.value;

    // Perform the fetch request to the Flask login endpoint
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
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Login successful:', data);
      alert('Login successful!');
    })
    .catch(error => {
      console.error('Login failed:', error);
      alert('Login failed: ' + error.message);
    });
  });
});
