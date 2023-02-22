document.addEventListener('DOMContentLoaded', () => {
  // Get the alert message element
  const alertMessage = document.querySelector('.alert');

  // Set a timeout of 3 seconds
  setTimeout(() => {
    // Hide the alert message by setting the display style to none
    alertMessage.style.display = 'none';
  }, 3000);
});
