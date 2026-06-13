document.addEventListener('DOMContentLoaded', () => {

    // --- TYPEWRITER EFFECT ---
    const words = [
        "MERN Stack Applications.",
        "Secure PHP Web Apps.",
        "Interactive Dashboards.",
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typewriterSpan = document.getElementById('typewriter');
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[wordIdx];
        if (isDeleting) {
            typewriterSpan.textContent = currentWord.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typewriterSpan.textContent = currentWord.substring(0, charIdx + 1);
            charIdx++;
        }

        let currentSpeed = isDeleting ? eraseSpeed : typeSpeed;

        if (!isDeleting && charIdx === currentWord.length) {
            isDeleting = true;
            currentSpeed = delayBetweenWords; // Pause at end of word
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            currentSpeed = 300; // Pause before typing next word
        }

        setTimeout(type, currentSpeed);
    }

    if (typewriterSpan) {
        type();
    }


    // --- STICKY NAV & MOBILE DROPDOWN ---
    const header = document.getElementById('site-header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const navLinks = document.querySelectorAll('#nav-menu a, #mobile-dropdown a');

    // Toggle Sticky Header Border/Background on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('bg-bg-dark/85', 'backdrop-blur-md', 'border-glass-border', 'py-1');
            header.classList.remove('border-transparent');
        } else {
            header.classList.remove('bg-bg-dark/85', 'backdrop-blur-md', 'border-glass-border', 'py-1');
            header.classList.add('border-transparent');
        }
    });

    // Mobile Navigation Toggle
    mobileToggle.addEventListener('click', () => {
        const isHidden = mobileDropdown.classList.toggle('hidden');
        const icon = document.getElementById('mobile-toggle-icon');
        
        if (icon) {
            if (isHidden) {
                icon.classList.remove('fa-xmark', 'rotate-180');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark', 'rotate-180');
            }
        }
    });

    // Close Dropdown on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDropdown.classList.add('hidden');
            const icon = document.getElementById('mobile-toggle-icon');
            if (icon) {
                icon.classList.remove('fa-xmark', 'rotate-180');
                icon.classList.add('fa-bars');
            }
        });
    });


    // --- HERO 3D ART INTERACTIVE PARALLAX (OPTION D CARD) ---
    const artTrigger = document.getElementById('hero-art-trigger');
    const shapes = document.querySelectorAll('.glass-shape');
    
    if (artTrigger) {
        artTrigger.addEventListener('mousemove', (e) => {
            // Fluid tracking transition (adds premium weight/inertia to the tracking motion)
            artTrigger.style.transition = 'transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)';
            shapes.forEach(shape => {
                shape.style.transition = 'transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)';
            });

            const rect = artTrigger.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Calculate rotation offsets based on cursor offset from center
            const rotateX = -y / 8; // Rotate on X axis based on Y offset
            const rotateY = x / 8;  // Rotate on Y axis based on X offset
            
            artTrigger.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Parallax shift for internal components to feel 3D
            shapes.forEach((shape) => {
                let baseZ = 0;
                let factor = 1;
                
                if (shape.classList.contains('hero-code-card')) {
                    baseZ = 10;
                    factor = 0.5;
                } else if (shape.classList.contains('hero-badge-prod')) {
                    baseZ = 45;
                    factor = 2.2;
                } else if (shape.classList.contains('hero-badge-pixel')) {
                    baseZ = 50;
                    factor = 2.8;
                }
                
                const tx = (x / rect.width) * factor * 12;
                const ty = (y / rect.height) * factor * 12;
                
                shape.style.transform = `translate3d(${tx}px, ${ty}px, ${baseZ}px)`;
            });
        });
        
        artTrigger.addEventListener('mouseleave', () => {
            // Elegant slow transition back to center on mouse leave
            artTrigger.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            shapes.forEach(shape => {
                shape.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            artTrigger.style.transform = 'rotateX(0deg) rotateY(0deg)';
            shapes.forEach(shape => {
                shape.style.transform = '';
            });
        });
    }


    // --- MOUSE SPOTLIGHT TRACKER ---
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    // --- INTERSECTION OBSERVER FOR FADE INS & NAV LINKS SYNC ---
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('#nav-menu a');

    // Scroll Reveal Observers
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.id === 'skills') {
                    const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-progress');
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.12,
        rootMargin: '0px'
    });

    const revealItems = document.querySelectorAll('.reveal-item');
    revealItems.forEach(item => revealObserver.observe(item));

    // Nav Links Highlight Observer
    const activeSections = new Set();
    const navCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSections.add(entry.target);
            } else {
                activeSections.delete(entry.target);
            }
        });

        if (activeSections.size > 0) {
            let currentActive = null;
            let minTop = Infinity;

            activeSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                // A section is primary if it spans the viewport height at Y = 150px (just below header)
                if (rect.top < 150 && rect.bottom > 150) {
                    currentActive = section;
                } else if (rect.top >= 0 && rect.top < minTop) {
                    minTop = rect.top;
                    currentActive = section;
                }
            });

            if (!currentActive) {
                currentActive = Array.from(activeSections)[0];
            }

            const id = currentActive.getAttribute('id');
            menuLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${id}`) {
                    link.classList.add('text-slate-100');
                    link.classList.remove('text-slate-400');
                    link.style.borderBottom = '2px solid #00f2fe';
                } else {
                    link.classList.remove('text-slate-100');
                    link.classList.add('text-slate-400');
                    link.style.borderBottom = 'none';
                }
            });
        }
    };

    const navObserver = new IntersectionObserver(navCallback, {
        root: null,
        threshold: 0.1, // Trigger when 10% of a section enters viewport
        rootMargin: '-80px 0px -10% 0px' // Offset top margin for sticky header
    });

    sections.forEach(sec => navObserver.observe(sec));


    // --- CONTACT FORM HANDLER ---
    const form = document.getElementById('portfolio-contact-form');
    const statusMsg = document.getElementById('form-status-msg');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Disable submit button & load status
            submitBtn.disabled = true;
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = `Sending Message... <span class="inline-block animate-spin border-2 border-slate-900 border-t-transparent rounded-full w-4 h-4 ml-1.5 align-middle"></span>`;
            
            // Clear previous validation errors and global message
            const errorSpans = form.querySelectorAll('.error-msg');
            errorSpans.forEach(span => {
                span.classList.add('hidden');
                span.textContent = '';
            });
            statusMsg.classList.add('hidden');

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const subjectInput = document.getElementById('contact-subject');
            const messageInput = document.getElementById('contact-message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput.value.trim();
            const message = messageInput.value.trim();

            let hasErrors = false;

            // Name validation
            if (!name) {
                const nameErr = document.getElementById('error-contact-name');
                nameErr.textContent = 'Full Name is Required!!';
                nameErr.classList.remove('hidden');
                hasErrors = true;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                const emailErr = document.getElementById('error-contact-email');
                emailErr.textContent = 'Email Address is Required!!';
                emailErr.classList.remove('hidden');
                hasErrors = true;
            } else if (!emailRegex.test(email)) {
                const emailErr = document.getElementById('error-contact-email');
                emailErr.textContent = 'Please, Enter a valid Email Address!!';
                emailErr.classList.remove('hidden');
                hasErrors = true;
            }

            // Subject validation
            if (!subject) {
                const subjectErr = document.getElementById('error-contact-subject');
                subjectErr.textContent = 'Subject is Required!!';
                subjectErr.classList.remove('hidden');
                hasErrors = true;
            }

            // Message validation
            if (!message) {
                const messageErr = document.getElementById('error-contact-message');
                messageErr.textContent = 'Message is Required!!';
                messageErr.classList.remove('hidden');
                hasErrors = true;
            }

            if (hasErrors) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                return;
            }

            // Simulate server delivery (1.4 seconds)
            setTimeout(() => {
                // Success feedback
                statusMsg.textContent = `Thanks, ${name}! Your email message was simulated successfully. I'll connect with you soon.`;
                statusMsg.className = 'text-center text-sm font-semibold rounded-lg py-2.5 px-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 block';
                
                // Form reset
                form.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1400);
        });
    }

});
