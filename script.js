// WhatsApp Number (Update with your actual number)
const WHATSAPP_NUMBER = '+15551234567'; // Replace with your WhatsApp business number

// Animated Counter for Statistics
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // milliseconds to count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        // Trigger animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter.parentElement);
    });
}

// Initialize WhatsApp links
function initWhatsAppLinks() {
    const whatsappMessage = "Hi! I'm interested in your physiotherapy services. Could you please tell me more?";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    
    // Update all WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href=""]');
    whatsappLinks.forEach(link => {
        if (link.classList.contains('whatsapp-link') || link.classList.contains('whatsapp-float')) {
            link.href = whatsappUrl;
        }
    });
}

// Hamburger Menu Toggle
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Handle Contact Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;

    // Create WhatsApp message
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneForForm = WHATSAPP_NUMBER.replace(/[^\d]/g, '');
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${phoneForForm}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    form.reset();
    
    // Show success message
    showNotification('Your message has been sent via WhatsApp!');
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #25D366;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        font-size: 14px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    notification.textContent = message;
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Parallax effect for background
function setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const speed = element.getAttribute('data-parallax') || 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-in-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add scroll animations for various elements
const elementsToAnimate = document.querySelectorAll(
    '.service-card, .contact-card, .team-card, .testimonial-card'
);
elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Scroll progress indicator
function setupScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #25D366, #20B2AA);
        z-index: 10001;
        width: 0;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Particle animation background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);

    // Create a few floating elements
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(46, 139, 87, 0.05);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float${i} ${15 + i * 5}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }

    // Add animation keyframes
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float0 {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(50px, -50px); }
            66% { transform: translate(-50px, 50px); }
        }
        @keyframes float1 {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(-50px, 50px); }
            66% { transform: translate(50px, -50px); }
        }
        @keyframes float2 {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(50px, 50px); }
            66% { transform: translate(-50px, -50px); }
        }
        @keyframes float3 {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(-30px, 30px); }
            66% { transform: translate(30px, -30px); }
        }
        @keyframes float4 {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(40px, -40px); }
            66% { transform: translate(-40px, 40px); }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppLinks();
    setupHamburgerMenu();
    animateCounter();
    setupScrollProgressBar();
    createParticles();
    setupParallax();
});
