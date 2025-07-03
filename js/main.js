document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
        // Save theme preference
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : '');
    });

    // Initialize AOS
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Initialize Typed.js
    if (window.Typed) {
        const typed = new Typed('#typed-text', {
            strings: [
                'Full Stack Developer',
                'Java Developer',
                'Web Developer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // DOM Elements
    const messageForm = document.getElementById('messageForm');

    // Skills data
    const skills = [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 82 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 78 },
        { name: 'Git', level: 75 }
    ];

    // Initialize the portfolio
    setupEventListeners();
    initializeAOS();
    initializeTypedAnimation();
    setupThemeToggle();
    setupSmoothScrolling();
    setupShowMoreProjectsButton();
    setupContactFormHandling();
    setupSkillsAnimation();
    setupResumeDownload();
    setupNavigationActiveState();
    setupMobileNavigation();

    // Setup Event Listeners
    function setupEventListeners() {
        // Chatbot toggle
        // Removed chatbot toggle logic
    }

    // Initialize AOS (Animate On Scroll)
    function initializeAOS() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Typing Animation
    function initializeTypedAnimation() {
        const typed = new Typed('#typed-text', {
            strings: [
                'Full Stack Developer',
                'Java Developer',
                'Web Developer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Smooth Scrolling
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Show More Projects Button
    function setupShowMoreProjectsButton() {
        const showMoreBtn = document.querySelector('.show-more');
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                // Add functionality to load more projects
                console.log('Loading more projects...');
            });
        }
    }

    // Contact Form Handling
    function setupContactFormHandling() {
        messageForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(messageForm);
            const formProps = Object.fromEntries(formData);
            
            try {
                // Here you would typically send the form data to your backend
                console.log('Form submitted:', formProps);
                messageForm.reset();
                showNotification('Message sent successfully!', 'success');
            } catch (error) {
                console.error('Error sending message:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            }
        });
    }

    // Notification System
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Skills Animation
    function setupSkillsAnimation() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }

    // Resume Download
    function setupResumeDownload() {
        const downloadButton = document.querySelector('.download-cv');
        downloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your resume download logic here
            window.open('path/to/your/resume.pdf', '_blank');
        });
    }

    // Navigation Active State
    function setupNavigationActiveState() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Mobile Navigation
    function setupMobileNavigation() {
        const nav = document.querySelector('nav');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        nav.appendChild(menuToggle);

        menuToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
            
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Add scroll-based animations
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('animate');
            }
        });
    });
});