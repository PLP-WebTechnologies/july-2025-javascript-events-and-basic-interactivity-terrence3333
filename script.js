// =======================
// Feature 1: Light/Dark Mode Toggle
// =======================
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// =======================
// Feature 2: Click Counter
// =======================
let count = 0;
const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('count');

countBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// =======================
// Part 3: Custom Form Validation
// =======================
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

// Utility function to validate email with regex
function isValidEmail(email) {
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return emailPattern.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload
  let isValid = true;

  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.textContent = '';

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation
  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    formSuccess.textContent = 'Registration successful!';
    form.reset(); // Clear the form
  }
});
