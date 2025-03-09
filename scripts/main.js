

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu after clicking a link
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const contactCard = document.querySelector(".contact-card");
  let isVisible = true;

  window.addEventListener("scroll", () => {
      if (window.scrollY > 100 && isVisible) {
          contactCard.style.opacity = "0.5";
      } else {
          contactCard.style.opacity = "1";
      }
  });
});