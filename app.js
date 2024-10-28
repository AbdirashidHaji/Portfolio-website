document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      document.getElementById('mobileMenuButton').classList.remove('open');
      document.getElementById('mobileMenu').classList.add('hidden');
    });
  });

  document.getElementById('mobileMenuButton').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    this.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
  });
});

  document.getElementById('show-more').addEventListener('click', function() {
    const additionalProjects = document.getElementById('additional-projects');
    if (additionalProjects.classList.contains('hidden')) {
      additionalProjects.classList.remove('hidden');
      this.textContent = 'Show Less Projects';
    } else {
      additionalProjects.classList.add('hidden');
      this.textContent = 'Show More Projects';
    }
  });
