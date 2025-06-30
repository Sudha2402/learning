// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });





/*


     
      <div class="testimonial" style="animation-delay: 0.4s;">
        <img src="https://randomuser.me/api/portraits/women/12.jpg" >
        <h3>Sandhya</h3>
        <h4>Founder of Nyara Restaurants</h4>
        <div class="stars">★★★★☆</div>
        <p>“I love the response and completely followed agile Software Development”</p>
      </div>
    
*/











    // Testimonial slider
    const testimonials = [
       
        {
            name: "Sudha",
            role: "Founder of Phenoxi Shanaya Bazaar",
            content: "Phenoxi Shanaya bazaar website is based on feedbacks throughout the completion",
            avatar: "assets/images/Sudha.jpg"
        },
         {
            name: "Sandhya",
            role: "Founder of Nyara Restaurants",
            content: "I love the response and completely followed agile Software Development",
            avatar: "assets/images/Sandhya.jpg"
        },
        {
            name: "Anjali",
            role: "Medical Student",
            content: "I loved the website design as per my ideas",
            avatar: "assets/images/Anjali.jpg"
        },
        {
            name: "Amar",
            role: "Founder of football Club",
            content: "I love fast Response",
            avatar: "assets/images/amar.jpg"
        }
    ];

    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            const testimonial = testimonials[index];
            testimonialSlider.innerHTML = `
                <div class="testimonial">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                    <p class="testimonial-content">"${testimonial.content}"</p>
                    <h4 class="testimonial-name">${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            `;
        }

        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2').forEach(el => {
        observer.observe(el);
    });
});




// Tab functionality for courses section
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Parallax effect for courses section
window.addEventListener('scroll', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});