document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      // Close the mobile menu if it's open
      document.getElementById('mobileMenuButton').classList.remove('open');
      document.getElementById('mobileMenu').classList.add('hidden');
    });
  });

  // Toggle mobile menu visibility
  document.getElementById('mobileMenuButton').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    this.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
  });
});