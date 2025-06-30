// script.js

// Assume 'unsafeHTML' is the string you want to set as innerHTML
    // if (window.trustedTypes && trustedTypes.createPolicy) {
    //   const policy = trustedTypes.createPolicy('my-policy', {
    //     createHTML: (string) => string
    //   });
    //   element.innerHTML = policy.createHTML(unsafeHTML);
    // } else {
    //   // Fallback for browsers that don't support Trusted Types
    //   element.innerHTML = unsafeHTML;
    // }




// Animate nav-boxes on scroll
const navBoxes = document.querySelectorAll('.nav-box');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.3 });

navBoxes.forEach(box => {
  observer.observe(box);
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
   
  });
});

// Highlight nav item on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 70) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
