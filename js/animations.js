// Background Light Animation
document.addEventListener('mousemove', (e) => {
    const lights = document.querySelectorAll('.light');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    lights.forEach((light, index) => {
        const rect = light.getBoundingClientRect();
        const lightX = rect.left + rect.width / 2;
        const lightY = rect.top + rect.height / 2;

        // Calculate distance between mouse and light
        const deltaX = mouseX - lightX;
        const deltaY = mouseY - lightY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Move light slightly towards mouse position
        const maxMove = 50;
        const moveX = (deltaX / distance) * maxMove;
        const moveY = (deltaY / distance) * maxMove;

        // Apply transform with different delays for each light
        light.style.transform = `translate(${moveX * (index + 1) * 0.2}px, ${moveY * (index + 1) * 0.2}px)`;
    });
});

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.transitionDelay = '0.2s';
            }
        }
    });
}, observerOptions);

// Observe all animated sections and project cards
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-animate');
    const projectCards = document.querySelectorAll('.project-card');

    sections.forEach(section => observer.observe(section));
    projectCards.forEach((card, index) => {
        observer.observe(card);
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});

// Button Hover Animation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const x = e.clientX - button.getBoundingClientRect().left;
        const y = e.clientY - button.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate header elements sequentially
    const headerElements = document.querySelectorAll('header *');
    headerElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Background Animation
class ParticleAnimation {
    constructor() {
        this.container = document.getElementById('animated-bg');
        if (!this.container) return;
        
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
        this.animate();
        this.setupEventListeners();
    }
    
    init() {
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 3 and 8 pixels
            const size = Math.random() * 5 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            
            // Random animation duration between 10 and 20 seconds
            const duration = Math.random() * 10 + 10;
            particle.style.animation = `float ${duration}s infinite ease-in-out`;
            
            // Random delay
            particle.style.animationDelay = `${Math.random() * -20}s`;
            
            this.container.appendChild(particle);
            this.particles.push({
                element: particle,
                x,
                y,
                size,
                speed: Math.random() * 0.2 + 0.1
            });
        }
    }
    
    animate() {
        this.particles.forEach(particle => {
            // Add slight movement based on mouse position
            const dx = (this.mouseX - window.innerWidth / 2) * particle.speed;
            const dy = (this.mouseY - window.innerHeight / 2) * particle.speed;
            
            particle.x += dx * 0.01;
            particle.y += dy * 0.01;
            
            // Keep particles within bounds
            if (particle.x < -10) particle.x = 110;
            if (particle.x > 110) particle.x = -10;
            if (particle.y < -10) particle.y = 110;
            if (particle.y > 110) particle.y = -10;
            
            particle.element.style.transform = `translate(${dx * 0.05}px, ${dy * 0.05}px)`;
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        // For touch devices
        document.addEventListener('touchmove', (e) => {
            if (e.touches[0]) {
                this.mouseX = e.touches[0].clientX;
                this.mouseY = e.touches[0].clientY;
            }
        });
    }
}

// Initialize animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleAnimation();
});

// Contact Popup Functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    const contactPopup = document.getElementById('contact-popup');
    const closePopup = document.querySelector('.close-popup');

    if (contactBtn && contactPopup) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close on X button click
        closePopup.addEventListener('click', () => {
            contactPopup.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close on outside click
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                contactPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
                contactPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
