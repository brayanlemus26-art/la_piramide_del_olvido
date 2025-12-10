// Efecto Parallax en scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    // Parallax para el fondo del hero
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax para el video/imagen de fondo
    const parallaxVideoBg = document.querySelector('.parallax-video-bg');
    if (parallaxVideoBg) {
        const rect = parallaxVideoBg.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            parallaxVideoBg.style.transform = `translateY(${(scrolled - parallaxVideoBg.offsetTop) * 0.3}px)`;
        }
    }
    
    // Efecto de aparición para las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar opacidad de las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignorar el enlace del dropdown toggle
        if (href === '#') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de animación para las llaves flotantes
const floatingKeys = document.querySelectorAll('.floating-key');
floatingKeys.forEach(key => {
    key.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    key.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});

// Manejo del formulario
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Aquí podrías agregar la lógica para enviar el formulario
        // Por ahora, solo mostramos un mensaje de confirmación
        alert(`¡Gracias por tu mensaje, ${nombre}! Te contactaremos pronto a ${email}.`);
        
        // Limpiar el formulario
        contactForm.reset();
    });
}

// Efecto de glitch aleatorio en el título principal
function randomGlitch() {
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        glitchElement.style.animation = 'none';
        setTimeout(() => {
            glitchElement.style.animation = 'glitch 3s infinite';
        }, 10);
    }
}

// Activar glitch aleatorio cada 8-15 segundos
setInterval(randomGlitch, Math.random() * 7000 + 8000);

// Efecto de hover para el logo
const logo = document.querySelector('.logo img');
if (logo) {
    logo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animación de entrada para el hero
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'scale(0.8)';
        heroContent.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'scale(1)';
        }, 300);
    }
});

// Efecto de partículas de polvo (opcional, para ambiente)
function createDustParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(212, 165, 116, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.transition = 'all 10s linear';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.style.top = window.innerHeight + 'px';
        particle.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Crear partículas ocasionalmente
setInterval(createDustParticle, 2000);

// Efecto de sonido hover (simulado con vibración visual)
const interactiveElements = document.querySelectorAll('.nav-btn, .game-button, .feature-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.1s ease';
    });
});

// Cambiar el color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 15, 10, 0.98)';
    } else {
        header.style.background = 'linear-gradient(180deg, rgba(30, 15, 10, 0.95) 0%, rgba(30, 15, 10, 0.85) 100%)';
    }
});

// Efecto de escritura para el tagline
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Activar efecto de escritura cuando el elemento es visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.typed) {
            const originalText = entry.target.textContent;
            typeWriter(entry.target, originalText, 80);
            entry.target.dataset.typed = 'true';
        }
    });
}, { threshold: 0.5 });

const tagline = document.querySelector('.tagline');
if (tagline) {
    observer.observe(tagline);
}

// Efecto de rotación 3D para las tarjetas de características
const cards = document.querySelectorAll('.feature-card');
cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Console Easter Egg
console.log('%c🏛️ LA PIRÁMIDE DEL OLVIDO 🏛️', 'color: #D4AF37; font-size: 24px; font-weight: bold;');
console.log('%c¿Podrás encontrar todos los secretos?', 'color: #D4A574; font-size: 14px;');
console.log('%cEscapa mientras puedas...', 'color: #8B6914; font-size: 12px; font-style: italic;');
