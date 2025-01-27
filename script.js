let darkMode = false;

document.getElementById('hamburger').addEventListener('click', function() {
    // Toggle hamburger menu active state
    this.classList.toggle('active');
    
    // Get the nav-icons element
    const navIcons = document.getElementById('nav-icons');
    const navAnchors = document.getElementById('nav-anchors');
    const homeSpacer = document.getElementById('home-spacer');
    const navList = document.getElementById('navlist');

    // Toggle fade effect on nav-icons
    if (navIcons.classList.contains('fade-in')) {
        navIcons.classList.remove('fade-in');
        navIcons.classList.add('fade-out');
    } else {
        navIcons.classList.remove('fade-out');
        navIcons.classList.add('fade-in');
    }
    if (navAnchors.classList.contains('fade-in-ham')) {
        navAnchors.classList.remove('fade-in-ham');
        navAnchors.classList.add('fade-out-ham');
    } else {
        navAnchors.classList.remove('fade-out-ham');
        navAnchors.classList.add('fade-in-ham');
    }
    if (homeSpacer.classList.contains('extended')) {
        homeSpacer.classList.remove('extended');
    } else {
        homeSpacer.classList.add('extended');
    }
    if (navList.classList.contains('extended')) {
        navList.classList.remove('extended');
    } else {
        navList.classList.add('extended');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        navIcons.classList.add('fade-in'); 
        navAnchors.classList.add('fade-in'); 
        navAnchors.style.pointerEvents = 'auto';
    } else {
        navIcons.style.pointerEvents = 'none';
        navAnchors.style.pointerEvents = 'none';
    }
});

document.getElementById('language-icon').addEventListener('click', toggleLanguage);

let textTransitionInProgress = false;

function toggleLanguage() {
    if (textTransitionInProgress) return;

    textTransitionInProgress = true;
    const body = document.body;
    const currentLanguage = body.getAttribute('lang');
    const fadeElements = document.querySelectorAll('.fade-text');

    fadeElements.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });

    setTimeout(() => {
        if (currentLanguage === 'es') {
            body.setAttribute('lang', 'en');
            updateContentToEnglish();
        } else {
            body.setAttribute('lang', 'es');
            updateContentToSpanish();
        }

        setTimeout(() => {
            fadeElements.forEach(element => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
            textTransitionInProgress = false;
        }, 300);
    }, 700);
}

function updateContentToSpanish() {
    setTimeout(() => {
        document.querySelector('a[href="#"]').textContent = "Inicio";
        document.querySelector('a[href="#about"]').textContent = "Sobre mí";
        document.querySelector('a[href="#projects"]').textContent = "Proyectos";
        document.querySelector('a[href="#contact"]').textContent = "Contáctame";
        document.querySelector('a[href="./resources/Maxwell Bourcier.pdf"]').innerHTML = "[ Currículum <i style='font-size: 12px; justify-content: center;' class='fa-solid fa-download'></i> ]";
        document.querySelector('.about-me').textContent = "Sobre mí";
        document.querySelector('.projects-me').textContent = "Proyectos";
        document.querySelector('.contact-me').textContent = "Contáctame";
        document.querySelector('.heading__line-1').innerHTML = "Hola, soy <span class='dev-name'>Maxwell</span>.";
        document.querySelector('.heading__line-2').textContent = "Un desarrollador full stack.";
        document.querySelector('.button-text').textContent = "Comencemos";
        document.querySelector('.about-text').innerHTML = `¡Hola, soy Maxwell Bourcier! Como un apasionado desarrollador Full Stack, me especializo en transformar ideas en soluciones funcionales y elegantes. Con un profundo amor por la programación y una insaciable curiosidad por el desarrollo de software, sobresalgo tanto en tecnologías de front-end como de back-end, asegurando experiencias de usuario sin interrupciones y un rendimiento robusto de las aplicaciones.<br><br>
                                                        La programación no es solo una habilidad para mí, es un viaje continuo de aprendizaje, resolución de problemas e innovación. Desde desentrañar errores complejos hasta crear código eficiente y elegante desde cero, me encanta enfrentar desafíos de frente y ofrecer resultados excepcionales. Estoy bien versado en marcos modernos, herramientas y mejores prácticas, y siempre estoy dispuesto a explorar nuevas tecnologías para mantenerme a la vanguardia de la industria.<br><br>
                                                        Más allá del teclado, me comprometo al crecimiento personal a través de cursos en línea, participación en la comunidad y proyectos colaborativos. Ya sea que estemos pensando en ideas innovadoras, optimizando soluciones existentes o explorando las últimas tendencias tecnológicas, me motiva la búsqueda de la excelencia en la programación de software.<br><br>
                                                        Cuando no estoy programando, probablemente esté en el campo de disc golf, equilibrando mi pasión por la tecnología con un estilo de vida activo. Si buscas un desarrollador dedicado e innovador para dar vida a tu visión, ¡conectemos y creemos algo extraordinario juntos!`;
        document.querySelector('label[for="name"]').textContent = "Nombre:";
        document.querySelector('label[for="email"]').textContent = "Correo electrónico:";
        document.querySelector('label[for="message"]').textContent = "Mensaje:";
        document.querySelector('p[id="send-button"]').textContent = "Enviar";
        document.querySelector('.footer-legal-1').textContent = "© 2025 MvxCoding. Todos los derechos reservados.";
        document.querySelector('.footer-legal-2').textContent = "El nombre y logo registrados son propiedad de MvxCoding, Inc.";
    }, 300);
}

function updateContentToEnglish() {
    setTimeout(() => {
        document.querySelector('a[href="#"]').textContent = "Home";
        document.querySelector('a[href="#about"]').textContent = "About";
        document.querySelector('a[href="#projects"]').textContent = "Projects";
        document.querySelector('a[href="#contact"]').textContent = "Contact";
        document.querySelector('a[href="./resources/Maxwell Bourcier.pdf"]').innerHTML = "[ Resume <i style='font-size: 12px; justify-content: center;' class='fa-solid fa-download'></i> ]";
        document.querySelector('.about-me').textContent = "About me.";
        document.querySelector('.projects-me').textContent = "Projects";
        document.querySelector('.contact-me').textContent = "Contact me";
        document.querySelector('.heading__line-1').innerHTML = "Hello, I'm <span class='dev-name'>Maxwell</span>.";
        document.querySelector('.heading__line-2').textContent = "A full stack developer.";
        document.querySelector('.button-text').textContent = "Let's get started";
        document.querySelector('.about-text').innerHTML = `Hi, I'm Maxwell Bourcier! As a passionate Full Stack Web Developer, I specialize in transforming ideas into functional, elegant solutions. With a deep love for coding and an insatiable curiosity for software development, I excel in both front-end and back-end technologies, ensuring seamless user experiences and robust application performance.<br><br>
                                                        Coding isn't just a skill for me—it's a continuous journey of learning, problem-solving, and innovation. From unraveling complex bugs to crafting sleek, efficient code from scratch, I thrive on tackling challenges head-on and delivering exceptional results. I'm well-versed in modern frameworks, tools, and best practices, and I'm always eager to explore new technologies to stay at the forefront of the industry.<br><br>
                                                        Beyond the keyboard, I'm committed to personal growth through online courses, community engagement, and collaborative projects. Whether it's brainstorming groundbreaking ideas, optimizing existing solutions, or diving into cutting-edge tech trends, I'm driven by the pursuit of excellence in software programming.<br><br>
                                                        When I'm not coding, I'm likely out on the disc golf course, balancing my passion for technology with an active lifestyle. If you're looking for a dedicated, innovative developer to bring your vision to life, let's connect and build something extraordinary together!`;
        document.querySelector('label[for="name"]').textContent = "Name:";
        document.querySelector('label[for="email"]').textContent = "Email:";
        document.querySelector('label[for="message"]').textContent = "Message:";
        document.querySelector('p[id="send-button"]').textContent = "Send";
        document.querySelector('.footer-legal-1').textContent = "© 2025 MvxCoding. All rights reserved.";
        document.querySelector('.footer-legal-2').textContent = "Trademarked name and logo are the property of MvxCoding, Inc.";
    }, 300);
}

document.getElementById('toggle-color-icon').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');

    const darkModeIcon = document.querySelector('#toggle-color-icon i');
    if (document.body.classList.contains('light-mode')) {
        darkMode = true;
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkMode = false;
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
}

const icons = document.querySelectorAll('.right-about i');
const languageText = document.querySelector('.language-text');
const imageTint = document.querySelector('.image-tint');

let animationInProgress = false;

icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        if (animationInProgress) return;

        icons.forEach((icon) => icon.classList.remove('centered'));

        icon.classList.add('centered');

        imageTint.classList.add('tint-on');

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
        imageTint.classList.remove('tint-on');


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
        ctx.fillStyle = darkMode ? 'rgb(51, 50, 59)' : 'rgb(232, 233, 243)';
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

        let color = darkMode ? 'rgb(51, 50, 59)' : 'rgb(232, 233, 243)';

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
                ctx.strokeStyle = darkMode ? `rgba(51, 50, 59, ${opacityValue})` : `rgba(232, 233, 243, ${opacityValue})` ;
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
        mouse.radius = Math.min(100, Math.max(30, (canvas.height / 100) * (canvas.width / 100))); 

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

            let color = darkMode ? 'rgb(51, 50, 59)' : 'rgb(232, 233, 243)';
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