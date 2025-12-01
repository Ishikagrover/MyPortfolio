// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Skills interactive functionality
document.querySelectorAll('.skill-badge, .tool-badge').forEach(badge => {
    badge.addEventListener('click', function(e) {
        // Toggle active class
        const isActive = this.classList.contains('active');
        
        // Remove active from all skills
        document.querySelectorAll('.skill-badge, .tool-badge').forEach(b => {
            b.classList.remove('active');
        });
        
        // Toggle current skill
        if (!isActive) {
            this.classList.add('active');
        }
    });
});
