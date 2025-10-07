document.addEventListener('DOMContentLoaded', function () {
  // Load the header
  fetch('new-header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('new-header-dynamic').innerHTML = html;
      setupNewHeaderMenu();
    });

  function setupNewHeaderMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (toggle && mobileMenu) {
      toggle.addEventListener('click', function () {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        mobileMenu.hidden = expanded;
      });
      // Optional: close menu when a link is clicked
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggle.setAttribute('aria-expanded', 'false');
          mobileMenu.hidden = true;
        });
      });
    }
  }
}); 