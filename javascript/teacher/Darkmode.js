document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

   
      container.classList.toggle('dark-mode');

      // Store the mode in local storage
      if (container.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
      } else {
        localStorage.setItem('mode', 'light');
      }
   

    // Check the mode in local storage on page load
    const mode = localStorage.getItem('mode');

    if (mode === 'dark') {
      container.classList.add('dark-mode');
    } else {
      container.classList.remove('dark-mode');
    }
  });