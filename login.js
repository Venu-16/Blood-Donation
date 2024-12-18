// Select form and elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Add submit event listener
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission for validation

  // Get input values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate email and password
  if (!validateEmail(email)) {
    displayError('Please enter a valid email address.');
  } else if (password.length < 6) {
    displayError('Password must be at least 6 characters long.');
  } else {
    // If validation passes, redirect to home page
    alert('Login successful!');
    window.location.href = 'home.html'; // Redirect to home page
  }
});

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Display error messages
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Clear error messages
function clearError() {
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
}
