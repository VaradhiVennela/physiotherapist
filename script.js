// WhatsApp Number (from flyer)
const WHATSAPP_NUMBER = '+917337352694'; // Primary WhatsApp contact

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
    // UX additions
    createUXElements();
    setupBackToTop();
    setupBookingModal();
    setupActiveNavLinks();
    setupNavbarAutoHide();
});

// Create missing UI elements if they don't exist: theme toggle, book button, back-to-top
function createUXElements(){
    const navContainer = document.querySelector('.nav-container');
    // No theme toggle — we use a green/cream palette by default
    if (navContainer && !document.querySelector('.theme-toggle')){
        // intentionally left blank
    }

    if (!document.querySelector('.book-float')){
        const book = document.createElement('button');
        book.className = 'book-float';
        book.innerHTML = '<i class="fas fa-calendar-check"></i><span>Book</span>';
        document.body.appendChild(book);
    }

    if (!document.querySelector('.back-to-top')){
        const topBtn = document.createElement('button');
        topBtn.className = 'back-to-top';
        topBtn.title = 'Back to top';
        topBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(topBtn);
    }
}

// Theme toggle: persist to localStorage
function setupThemeToggle(){
    // theme toggle removed — keep function stub for backward compatibility
    return;
}

// Back to top button behavior
function setupBackToTop(){
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) btn.classList.add('show');
        else btn.classList.remove('show');
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Booking modal (creates modal on demand)
function setupBookingModal(){
    const book = document.querySelector('.book-float');
    if (!book) return;

    const openModal = () => {
        if (document.querySelector('.modal-backdrop')) return;

        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-header">
                <h3>Book an Appointment</h3>
                <button class="modal-close" aria-label="Close">&times;</button>
            </div>
            <form class="modal-form">
                <input type="text" name="name" placeholder="Your name" required />
                <input type="tel" name="phone" placeholder="Phone" required />
                <textarea name="msg" placeholder="Preferred date/time or message" rows="3"></textarea>
                <button type="submit" class="submit-btn">Send via WhatsApp</button>
            </form>
        `;

        backdrop.appendChild(modal);
        document.body.appendChild(backdrop);

        // Close handlers
        backdrop.addEventListener('click', (e) => { if (e.target === backdrop) backdrop.remove(); });
        modal.querySelector('.modal-close').addEventListener('click', () => backdrop.remove());

        // Submit handler: open WhatsApp
        modal.querySelector('.modal-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value || '';
            const phone = form.phone.value || '';
            const msg = form.msg.value || '';
            const whatsappMessage = `Booking request from ${name} (phone: ${phone})\n\n${msg}`;
            const encoded = encodeURIComponent(whatsappMessage);
            const phoneForForm = WHATSAPP_NUMBER.replace(/[^\d]/g, '');
            window.open(`https://wa.me/${phoneForForm}?text=${encoded}`, '_blank');
            backdrop.remove();
            showNotification('Opening WhatsApp to complete booking...');
        });
    };

    book.addEventListener('click', openModal);
}

// Highlight active nav link based on visible section
function setupActiveNavLinks(){
    const links = Array.from(document.querySelectorAll('.nav-link')).filter(l => l.hash);
    if (!links.length) return;

    const sections = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id ? `#${entry.target.id}` : null;
            const link = links.find(l => l.getAttribute('href') === id);
            if (entry.isIntersecting && link){
                links.forEach(l => l.classList.remove('active-link'));
                link.classList.add('active-link');
            }
        });
    }, { threshold: 0.55 });

    sections.forEach(s => obs.observe(s));
}

// Hide navbar on scroll down, show on scroll up
function setupNavbarAutoHide(){
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    let lastY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentY = window.scrollY;
                if (currentY > lastY && currentY > 100) {
                    nav.style.transform = 'translateY(-110%)';
                } else {
                    nav.style.transform = '';
                }
                lastY = currentY;
                ticking = false;
            });
            ticking = true;
        }
    });
}
