/**
 * Main JavaScript Module
 * Handles general functionality, greeting, and mobile menu
 */

/**
 * Update dynamic greeting based on time of day
 */
function updateGreeting() {
    const greetingText = document.getElementById('greetingText');
    const greetingDate = document.getElementById('greetingDate');
    
    if (!greetingText || !greetingDate) return;
    
    const now = new Date();
    const hour = now.getHours();
    
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning! ☀️';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon! 🌤️';
    } else if (hour >= 17 && hour < 21) {
        greeting = 'Good Evening! 🌅';
    } else {
        greeting = 'Good Night! 🌙';
    }
    
    greetingText.textContent = greeting;
    
    // Format date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    greetingDate.textContent = now.toLocaleDateString('en-KE', options);
}

/**
 * Set up mobile menu toggle
 */
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

/**
 * Add scroll effect to navbar
 */
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

/**
 * Smooth scroll for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

/**
 * Initialize all functionality
 */
function init() {
    updateGreeting();
    renderProducts();
    setupMobileMenu();
    setupNavbarScroll();
    setupSmoothScroll();
    
    // Update greeting every minute
    setInterval(updateGreeting, 60000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
