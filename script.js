document.getElementById('language-icon').addEventListener('click', toggleLanguage);
document.getElementById('toggle-color-icon').addEventListener('click', toggleDarkMode);

let textTransitionInProgress = false;

function toggleLanguage() {
    if (textTransitionInProgress) return;

    textTransitionInProgress = true;
    const body = document.body;
    const currentLanguage = body.getAttribute('lang');
    const fadeElements = document.querySelectorAll('.fade-text');

    // Start fade-out transition
    fadeElements.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });

    // Wait for fade-out to complete before changing language (adjust timing as necessary)
    setTimeout(() => {
        if (currentLanguage === 'es') {
            body.setAttribute('lang', 'en');
            updateContentToEnglish();
        } else {
            body.setAttribute('lang', 'es');
            updateContentToSpanish();
        }

        // After content change, start fade-in transition
        setTimeout(() => {
            fadeElements.forEach(element => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
            textTransitionInProgress = false;
        }, 300); // Delay fade-in until after content update
    }, 700); // Adjust this timeout to match your fade-out duration
}

function updateContentToSpanish() {
    setTimeout(() => {
        document.querySelector('a[href="#"]').textContent = "Inicio";
        document.querySelector('a[href="#about"]').textContent = "Sobre mí";
        document.querySelector('a[href="#projects"]').textContent = "Proyectos";
        document.querySelector('a[href="#contact"]').textContent = "Contáctame";
        document.querySelector('a[href="./resources/Maxwell Bourcier.pdf"]').textContent = "[ Currículum ]";
        document.querySelector('.about-me').textContent = "Sobre mí";
        document.querySelector('.projects-me').textContent = "Proyectos";
        document.querySelector('.contact-me').textContent = "Contáctame";
        document.querySelector('.heading__line-1').innerHTML = "Hola, soy <span class='dev-name'>Maxwell</span>.";
        document.querySelector('.heading__line-2').textContent = "Un desarrollador full stack.";
        document.querySelector('.button-text').textContent = "Ver mi trabajo";
        document.querySelector('.about-text').textContent = "¡Hola, soy Maxwell Bourcier! Soy un desarrollador de software apasionado que disfruta convertir ideas en soluciones funcionales y elegantes. La programación no es solo una habilidad para mí, ¡es un viaje de aprendizaje y resolución de problemas sin fin! Desde la emoción de depurar hasta la alegría de crear algo desde cero, abrazo cada desafío como una oportunidad para crecer. Siempre estoy explorando nuevas tecnologías, mejorando mi oficio y manteniéndome curioso acerca de lo que sigue. Cuando no estoy programando o jugando al disc golf, me encontrarás ideando proyectos innovadores o tomando cursos en línea para expandir mis conocimientos. ¡Construyamos algo increíble juntos!";
        document.querySelector('label[for="name"]').textContent = "Nombre:";
        document.querySelector('label[for="email"]').textContent = "Correo electrónico:";
        document.querySelector('label[for="message"]').textContent = "Mensaje:";
        document.querySelector('p[id="send-button"]').textContent = "Enviar";
    }, 300); // Slight delay to ensure content change happens after fade-out
}

function updateContentToEnglish() {
    setTimeout(() => {
        document.querySelector('a[href="#"]').textContent = "Home";
        document.querySelector('a[href="#about"]').textContent = "About";
        document.querySelector('a[href="#projects"]').textContent = "Projects";
        document.querySelector('a[href="#contact"]').textContent = "Contact";
        document.querySelector('a[href="./resources/Maxwell Bourcier.pdf"]').textContent = "[ Resume ]";
        document.querySelector('.about-me').textContent = "About me.";
        document.querySelector('.projects-me').textContent = "Projects";
        document.querySelector('.contact-me').textContent = "Contact me";
        document.querySelector('.heading__line-1').innerHTML = "Hello, I'm <span class='dev-name'>Maxwell</span>.";
        document.querySelector('.heading__line-2').textContent = "A full stack developer.";
        document.querySelector('.button-text').textContent = "View my work";
        document.querySelector('.about-text').textContent = "Hi, I'm Maxwell Bourcier! I'm a passionate software developer who thrives on turning ideas into functional, elegant solutions. Coding isn't just a skill for me; it's a journey of endless learning and problem-solving. From the thrill of debugging to the joy of creating something from scratch, I embrace every challenge as an opportunity to grow. I'm constantly exploring new technologies, improving my craft, and staying curious about what's next. When I'm not coding or playing disc golf, you'll find me brainstorming innovative projects or diving into online courses to expand my knowledge. Let's build something amazing together!";
        document.querySelector('label[for="name"]').textContent = "Name:";
        document.querySelector('label[for="email"]').textContent = "Email:";
        document.querySelector('label[for="message"]').textContent = "Message:";
        document.querySelector('p[id="send-button"]').textContent = "Send";
    }, 300); // Slight delay to ensure content change happens after fade-out
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const darkModeIcon = document.querySelector('#toggle-color-icon i');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    } else {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
}

const icons = document.querySelectorAll('.right-about i');
const languageText = document.querySelector('.language-text');

let animationInProgress = false;

icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        if (animationInProgress) return;

        icons.forEach((icon) => icon.classList.remove('centered'));

        icon.classList.add('centered');

        const newLanguage = icon.getAttribute('data-language');

        if (languageText.textContent === newLanguage) return; 
        languageText.classList.remove('fade-in');
        languageText.classList.add('fade-out');

        animationInProgress = true;

        setTimeout(() => {
            languageText.textContent = newLanguage;

            languageText.classList.remove('fade-out');
            languageText.classList.add('fade-in');

            animationInProgress = false;
        }, 300);
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.right-about i')) {
        icons.forEach((icon) => icon.classList.remove('centered'));

        languageText.classList.remove('fade-in');
        languageText.classList.add('fade-out');

        setTimeout(() => {
            languageText.textContent = '';
            languageText.classList.remove('fade-out');
        }, 300);
    }
});

window.onload = function() {
    window.scrollTo(0, 0);

    if (window.location.hash) {
        window.location.hash = '';
    }
    adjustHeroHeight();
};

function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    const vh = window.innerHeight * 0.01;
    hero.style.height = `${vh * 100}px`;
}

window.addEventListener('resize', adjustHeroHeight);

const canvas = document.getElementById('background__canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;
let resizeTimeout;

let mouse = {
    x: null,
    y: null,
    radius: Math.min(100, Math.max(30, (canvas.height / 100) * (canvas.width / 100))),
};

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

class Particle {
    constructor(x, y,  directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgb(232, 233, 243)';
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width - this.size || this.x < this.size) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height - this.size || this.y < this.size) {
            this.directionY = -this.directionY;
        }

        if (this.x < 0 || this.x > canvas.width) {
            this.x = Math.random() * canvas.width;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.y = Math.random() * canvas.height;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;

        let distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < mouse.radius + this.size) {
            let angle = Math.atan2(dy, dx); 
            let overlap = mouse.radius + this.size - distance; 

            this.x -= Math.cos(angle) * overlap;
            this.y -= Math.sin(angle) * overlap;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        
        this.draw();
    }
}

function init() {

    particlesArray = [];
    
    let baseDensity = (canvas.height * canvas.width) / 16000;
    let adjustedDensity = baseDensity * (innerWidth < 768 ? 2 : 1);

    for (let i = 0; i < adjustedDensity; i++) {
        let size = (Math.random() * 3) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);

        let directionX = (Math.random() * 1 - 0.5) * (innerWidth < 768 ? 0.3 : 0.5);
        let directionY = (Math.random() * 1 - 0.5) * (innerWidth < 768 ? 0.3 : 0.5);

        let color = 'rgb(232, 233, 243)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

function connect() {
    let maxConnectionDistance = Math.min(canvas.width, canvas.height) / 7;

    if (innerWidth < 768) {
        maxConnectionDistance *= 1.5;
    }

    let opacityValue = 1;

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) +
                           ((particlesArray[a].y - particlesArray[b].y) ** 2);
            if (distance < maxConnectionDistance ** 2) {
                opacityValue = 1 - (distance / (maxConnectionDistance ** 2)); 
                ctx.strokeStyle = `rgba(232, 233, 243, ${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        mouse.radius = Math.min(100, Math.max(30, (canvas.height / 100) * (canvas.width / 100))); // Recalculate radius

        adjustParticleCount();

        refreshParticles();
    }, 300);
});

function adjustParticleCount() {
    const newArea = canvas.width * canvas.height;
    const baseDensity = newArea / 16000;
    const adjustedDensity = baseDensity * (innerWidth < 768 ? 2 : 1);

    if (particlesArray.length < adjustedDensity) {
        const particlesToAdd = Math.floor(adjustedDensity - particlesArray.length);
        for (let i = 0; i < particlesToAdd; i++) {
            let size = (Math.random() * 3) + 1;
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;

            let directionX = (Math.random() * 1 - 0.5) * (innerWidth < 768 ? 0.3 : 0.5);
            let directionY = (Math.random() * 1 - 0.5) * (innerWidth < 768 ? 0.3 : 0.5);

            let color = 'rgb(232, 233, 243)';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    } else if (particlesArray.length > adjustedDensity) {
        const particlesToRemove = particlesArray.length - Math.floor(adjustedDensity);
        particlesArray.splice(-particlesToRemove, particlesToRemove);
    }

    previousArea = newArea;
}

function refreshParticles() {
    particlesArray.forEach((particle) => {
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
        }
    });
}

window.addEventListener('mouseout',
    function() {
        mouse.x = undefined;
        mouse.y = undefined;
    }
);

init();
animate();