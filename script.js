
// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animated underline effect on hover
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Only add underline if not already present
        if (!this.querySelector('.nav-underline')) {
            let underline = document.createElement('span');
            underline.className = 'nav-underline';
            this.appendChild(underline);
            setTimeout(() => underline.classList.add('active'), 10);
        }
    });
    link.addEventListener('mouseleave', function() {
        let underline = this.querySelector('.nav-underline');
        if (underline) {
            underline.classList.remove('active');
            setTimeout(() => underline.remove(), 300);
        }
    });
});
