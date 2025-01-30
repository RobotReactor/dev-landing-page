let lightMode = false;

function checkSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        lightMode = savedTheme === 'light';
    } else {
        lightMode = !prefersDark;
    }

    applyTheme();
}

function toggleLightMode() {
    lightMode = !lightMode;
    localStorage.setItem('theme', lightMode ? 'light' : 'dark');
    applyTheme();
}

function applyTheme() {
    if (lightMode) {
        document.body.classList.add('light-mode');
        document.querySelector('#toggle-color-icon i').classList.remove('fa-moon');
        document.querySelector('#toggle-color-icon i').classList.add('fa-sun');
    } else {
        document.body.classList.remove('light-mode');
        document.querySelector('#toggle-color-icon i').classList.remove('fa-sun');
        document.querySelector('#toggle-color-icon i').classList.add('fa-moon');
    }
}

const devNameElement = document.querySelector('.dev-name');
const words = ['Maxwell', 'Ambitious', 'Driven', 'Creative', 'Focused', 'Diligent', 'Adaptive', 'Curious']; 
let currentIndex = 0;

document.querySelector('#toggle-color-icon i').addEventListener('click', toggleLightMode);

// Run the check on page load
window.addEventListener('DOMContentLoaded', checkSystemTheme);

const navIcons = document.getElementById('nav-icons');
const navAnchors = document.getElementById('nav-anchors');
const homeSpacer = document.getElementById('home-spacer');
const navList = document.getElementById('navlist');
const hamburger = document.getElementById('hamburger');


const isHamburgerVisible = () => {
    const style = window.getComputedStyle(hamburger);
    return style.opacity !== '0' && style.display !== 'none';
};

const closeMenuOnClickOutside = (e) => {
    console.log("closeMenuClickOutside");
    if (!e.target.closest('.navlist') 
        && !e.target.closest('#hamburger') 
            && isHamburgerVisible() ) {
        closeMenu();
    }
};

const openMenu = () => {
    console.log("Open!");

    hamburger.classList.add('active');

    navIcons.classList.remove('fade-out');
    navIcons.classList.add('fade-in');

    navAnchors.classList.add('fade-in-ham');
    navAnchors.classList.remove('fade-out-ham');

    homeSpacer.classList.add('extended');
    
    navList.classList.remove('collapsed');
    navList.classList.add('extended');

    document.addEventListener('click', closeMenuOnClickOutside);
    document.addEventListener('touchend', closeMenuOnClickOutside);
};

const closeMenu = () => {
    console.log("Close!");

    hamburger.classList.remove('active');

    navIcons.classList.remove('fade-in');
    navIcons.classList.add('fade-out');

    navAnchors.classList.remove('fade-in-ham');
    navAnchors.classList.add('fade-out-ham');

    homeSpacer.classList.remove('extended');

    navList.classList.remove('extended');
    navList.classList.add('collapsed');

    // Remove the outside click listener
    document.removeEventListener('click', closeMenuOnClickOutside);
    document.removeEventListener('touchend', closeMenuOnClickOutside);
};

hamburger.addEventListener('click', function() {
    if(!this.classList.contains('active')) {
        openMenu();
    } else {
        closeMenu();
    }
});

const disableAnimationOnResize = () => {
    if (window.innerWidth <= 600) {
        // Remove animation classes when resizing to 600px or below
        hamburger.classList.remove('active');
        navList.classList.remove('extended');
        navIcons.classList.remove('fade-in', 'fade-out');
        navAnchors.classList.remove('fade-in-ham', 'fade-out-ham');
    }
};

window.addEventListener('resize', disableAnimationOnResize);

document.getElementById('language-icon').addEventListener('click', toggleLanguage);

let textTransitionInProgress = false;
let fireworkColor = "green";

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

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabButtonsContainer = document.querySelector('.tab-buttons');

    // Create the underline element
    const underline = document.createElement('div');
    underline.classList.add('underline');
    tabButtonsContainer.appendChild(underline);


    // Function to update the underline position
    const updateUnderlinePosition = (activeButton) => {
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = tabButtonsContainer.getBoundingClientRect();

        underline.style.width = `${buttonRect.width}px`;
        underline.style.left = `${buttonRect.left - containerRect.left}px`;
    };

    // Add event listeners to buttons
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            tabPanels.forEach((panel) => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`tab-${tabId}`).classList.add('active');

            // Update underline position
            updateUnderlinePosition(button);
        });
    });
});

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
        document.querySelector('p[id="tab-button-1"').textContent = "Jeugo";
        document.querySelector('p[id="tab-button-2"').textContent = "Web";
        document.querySelector('p[id="tab-button-3"').textContent = "Estilo de Vida";
        document.querySelector('.project-text-1').innerHTML = "Slide Quest es un juego de rompecabezas para un solo jugador, diseñado con desafiantes mecánicas de deslizamiento que requieren que los jugadores piensen estratégicamente para completar cada nivel. <br><br>El juego utiliza un algoritmo para determinar los movimientos óptimos y generar rompecabezas desafiantes. Los jugadores navegan por una cuadrícula deslizándose sobre baldosas de hielo en direcciones específicas, con el objetivo de resolver el rompecabezas en la menor cantidad de movimientos posible. <br><br>Una característica clave de Slide Quest es su Editor de Niveles, que permite a los usuarios crear y personalizar sus propios rompecabezas, además de guardar fragmentos para generar niveles en futuras versiones. <br><br>Aunque aún está en desarrollo, los próximos pasos en la hoja de ruta incluyen la finalización de los sprites del juego y la implementación de mapas generados por algoritmos utilizando fragmentos creados por los usuarios."
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
        document.querySelector('p[id="tab-button-1"').textContent = "Game";
        document.querySelector('p[id="tab-button-2"').textContent = "Web";
        document.querySelector('p[id="tab-button-3"').textContent = "Lifestyle";
        document.querySelector('.project-text-1').innerHTML = 'Slide Quest is a single-player puzzle game designed with challenging sliding mechanics that require players to think strategically to complete each level. <br><br>The game uses an algorithm to determine optimal moves and create challenging puzzles. Players navigate a grid by sliding along ice tiles in specific directions, aiming to solve the puzzle with the fewest moves possible. <br><br>A key feature of Slide Quest is its Level Editor, which allows users to create and customize their own puzzles and save snippets to generate levels in future builds. <br><br>Although a work in progress, completion of game sprites and algorithm generated maps using user created chunks are next up in the pipeline.';
    }, 300);
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

const fireworksCanvas = document.getElementById('fireworks__canvas');
const ctx2 = canvas.getContext('2d');

fireworksCanvas.style.position = 'absolute';
fireworksCanvas.style.zIndex = 5000;
fireworksCanvas.style.pointerEvents = 'none';

fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;
let resizeTimeout;

let mouse = {
    x: null,
    y: null,
    radius: 0,
    targetRadius: Math.min(100, Math.max(80, (canvas.height / 100) * (canvas.width / 100))),
    touchActive: false
};

const fireworksParticles = [];

function createFireworkParticles(x, y) {

    for (let i = 0; i < 30; i++) {
        fireworksParticles.push({
            x: x,
            y: y,
            radius: Math.random() * 4 + 2,
            color: ["red", "white", getFireworkColor()][Math.floor(Math.random() * 3)],
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 4 + 2,
            alpha: 1
        });
    }
}

function updateFireworkParticles() {
    for (let i = fireworksParticles.length - 1; i >= 0; i--) {
        let p = fireworksParticles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
            fireworksParticles.splice(i, 1);
        }
    }
}

function drawFireworkParticles(ctx2) {
    fireworksParticles.forEach((p) => {
        ctx2.globalAlpha = p.alpha;
        ctx2.fillStyle = p.color;
        ctx2.beginPath();
        ctx2.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx2.fill();
    });
    ctx2.globalAlpha = 1;
}

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

window.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
    mouse.radius = 0;
    mouse.touchActive = true;

    let expand = () => {
        if (mouse.radius < mouse.targetRadius && mouse.touchActive) {
            mouse.radius += 4;
            requestAnimationFrame(expand);
        }
    };
    expand();

});

window.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
});

window.addEventListener('touchend', () => {
    mouse.touchActive = false;

    let shrink = () => {
        if (!mouse.touchActive && mouse.radius > 0) {
            mouse.radius -= 2;
            requestAnimationFrame(shrink);
        } else if (!mouse.touchActive) {
            mouse.x = null;
            mouse.y = null;
        }
    };
    shrink();
});

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
        ctx.fillStyle = lightMode ? 'rgb(51, 50, 59)' : 'rgb(232, 233, 243)';
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

        let color = lightMode ? 'rgb(51, 50, 59)' : 'rgb(232, 233, 243)';

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

    updateFireworkParticles();
    drawFireworkParticles(ctx2);
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
                ctx.strokeStyle = lightMode ? `rgba(51, 50, 59, ${opacityValue})` : `rgba(232, 233, 243, ${opacityValue})` ;
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

            let color = lightMode ? 'rgb(51, 50, 59)' : 'rgb(232, 233, 243)';
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

document.getElementById("language-icon").addEventListener("click", (event) => {

    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createFireworkParticles(x, y);
});

function getFireworkColor() {
    if (document.body.getAttribute('lang') === 'es') {
        return "blue";
    } else {
        return "green";
    }
}

init();
animate();