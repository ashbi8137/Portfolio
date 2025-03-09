// Typing Animation
const typingText = document.querySelector('.typing-text');
const texts = [
    'Program Facilitator',
    'Event Lead',
    'Tech Innovator',
    'Community Builder',
    'Android Developer',
    'Web Developer',
    
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// Start typing animation when page loads
window.onload = () => {
    type();
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Navigation highlight on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll reveal animations
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const techItems = document.querySelectorAll('.tech-tags span');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });
    
    // Add staggered animation for tech items
    techItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = `all 0.3s ease-out ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Active link highlighting
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    const fromTop = window.scrollY + 100;

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Add this JavaScript for form submission and smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.display = 'block';
        
        // Clear form after submission
        setTimeout(() => {
            form.reset();
            formMessage.style.display = 'none';
        }, 3000);
    });
});

// Improved lightbox functionality
function openLightbox(imgSrc, imgAlt) {
    console.log("Opening lightbox for: " + imgSrc); // Debug log
    
    // Get lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Set lightbox content
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = imgAlt;
    
    // Display lightbox
    lightbox.style.display = 'flex';
    
    // Prevent page scrolling
    document.body.style.overflow = 'hidden';
    
    // Add close event to background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Add escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    console.log("Closing lightbox"); // Debug log
    
    // Hide lightbox
    document.getElementById('lightbox').style.display = 'none';
    
    // Re-enable page scrolling
    document.body.style.overflow = 'auto';
}

// Make sure all images use this function
document.addEventListener('DOMContentLoaded', function() {
    console.log("Setting up lightbox listeners");
    
    // Apply to all clickable images across all sections
    const clickableImages = document.querySelectorAll('.clickable-image');
    clickableImages.forEach(function(img) {
        img.onclick = function() {
            openLightbox(this.src, this.alt);
        };
    });
});

// Add this code to ensure the mobile menu works correctly
document.addEventListener('DOMContentLoaded', function() {
    console.log("Initializing mobile menu"); // Debug log
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        console.log("Found menu elements"); // Debug log
        
        // Log the number of nav items
        console.log("Number of nav items:", navLinks.querySelectorAll('li').length);
        
        mobileMenuBtn.addEventListener('click', function(e) {
            console.log("Menu button clicked"); // Debug log
            
            // Toggle active class
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Log the current state
            console.log("Menu active:", navLinks.classList.contains('active'));
        });
        
        // Close menu when a link is clicked
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.error("Could not find mobile menu elements");
    }
});
