const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => revealOnScroll.observe(element));

const sections = document.querySelectorAll('section[id], header[id], footer[id]');

window.addEventListener('scroll', () => {
  let current = 'inicio';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navItems.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});
