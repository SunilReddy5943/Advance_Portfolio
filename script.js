/*=============== PRELOADER ===============*/
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

/*=============== CUSTOM CURSOR ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');

    if (cursor && cursorOutline) {
        document.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursor.style.left = `${posX}px`;
            cursor.style.top = `${posY}px`;
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            cursor.style.opacity = '1';
            cursorOutline.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        });

        // Add hover effect to links and buttons
        const hoverElements = document.querySelectorAll('a, button, .btn, .project-item, .skill-item, .soft-skill-item');
        
        hoverElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
});

/*=============== MOBILE MENU TOGGLE ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

/*=============== HEADER SCROLL EFFECT ===============*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*=============== ACTIVE NAVIGATION LINKS ===============*/
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', updateActiveLink);

/*=============== TYPING EFFECT ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text');
    
    if (typingElement && typeof Typed !== 'undefined') {
        new Typed(typingElement, {
            strings: ['Full-Stack Developer', 'Python Developer', 'Web Developer', 'Problem Solver'],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });
    }
});

/*=============== SKILLS TABS ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length && tabPanes.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show corresponding tab pane
                const target = btn.getAttribute('data-target');
                document.getElementById(target).classList.add('active');
            });
        });
    }
});

/*=============== SKILL PROGRESS BARS ===============*/
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

function checkIfInView() {
    const skills = document.querySelector('#skills');
    if (!skills) return;
    
    const windowHeight = window.innerHeight;
    const elementTop = skills.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
        animateProgressBars();
        window.removeEventListener('scroll', checkIfInView);
    }
}

window.addEventListener('scroll', checkIfInView);
document.addEventListener('DOMContentLoaded', checkIfInView);

/*=============== PROJECT FILTERING ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterBtns.length && projectItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Get filter value
                const filter = btn.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});

/*=============== PROJECT DETAILS MODAL ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const projectBtns = document.querySelectorAll('.project-btn');
    const projectDetails = document.querySelectorAll('.project-details');

    if (projectBtns.length && projectDetails.length) {
        projectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = btn.closest('.project-item');
                const details = parent.querySelector('.project-details');
                
                if (details) {
                    details.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    // Close modal when clicking outside content
                    details.addEventListener('click', (e) => {
                        if (e.target === details) {
                            details.classList.remove('active');
                            document.body.style.overflow = 'auto';
                        }
                    });
                    
                    // Add close button to modal
                    const closeBtn = document.createElement('button');
                    closeBtn.classList.add('modal-close');
                    closeBtn.innerHTML = '&times;';
                    closeBtn.style.position = 'absolute';
                    closeBtn.style.top = '20px';
                    closeBtn.style.right = '20px';
                    closeBtn.style.background = 'none';
                    closeBtn.style.border = 'none';
                    closeBtn.style.fontSize = '24px';
                    closeBtn.style.cursor = 'pointer';
                    closeBtn.style.color = '#333';
                    
                    const detailsContent = details.querySelector('.details-content');
                    if (detailsContent && !detailsContent.querySelector('.modal-close')) {
                        detailsContent.appendChild(closeBtn);
                        
                        closeBtn.addEventListener('click', () => {
                            details.classList.remove('active');
                            document.body.style.overflow = 'auto';
                        });
                    }
                }
            });
        });
    }
});

/*=============== BACK TO TOP BUTTON ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

/*=============== SMOOTH SCROLLING ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default if not the back to top button and the href is not just '#'
            if (!link.classList.contains('back-to-top') && link.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

/*=============== CONTACT FORM ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (name && email && subject && message) {
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.classList.add('form-success');
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <p>Thank you for your message, ${name}! I'll get back to you soon.</p>
                `;
                successMessage.style.background = 'rgba(108, 99, 255, 0.1)';
                successMessage.style.color = 'var(--primary-color)';
                successMessage.style.padding = '1rem';
                successMessage.style.borderRadius = '10px';
                successMessage.style.marginTop = '1rem';
                successMessage.style.display = 'flex';
                successMessage.style.alignItems = 'center';
                successMessage.style.gap = '0.5rem';
                
                // Add success message to form
                contactForm.appendChild(successMessage);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
});

/*=============== AOS ANIMATION INITIALIZATION ===============*/
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
});

/*=============== REVEAL ANIMATIONS ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate when they come into view
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    function handleScrollAnimation() {
        animateElements.forEach(element => {
            if (checkIfInViewport(element)) {
                const animationClass = element.dataset.animation || 'fade-in';
                element.classList.add(animationClass);
            }
        });
    }
    
    // Initial check on page load
    handleScrollAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);
});

/*=============== SMOOTH SECTION TRANSITIONS ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    function addTransitionClasses() {
        sections.forEach(section => {
            // Add transition class if not already present
            if (!section.classList.contains('section-transition')) {
                section.classList.add('section-transition');
            }
        });
    }
    
    addTransitionClasses();
});