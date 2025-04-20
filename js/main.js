document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
