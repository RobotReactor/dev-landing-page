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
// let size = Math.random() * 5 + 1;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/120) * (canvas.width/120)
}

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
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
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
    let numberOfParticles = (canvas.height * canvas.width) / 16000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 3) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'rgb(0, 0, 0)';

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
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) 
            * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) 
            * (particlesArray[a].y -  particlesArray[b].y));
            if(distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle='rgb(0, 0, 0,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener('resize',
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height/120) * (canvas.height/120));
        init();
    }
);

window.addEventListener('mouseout',
    function() {
        mouse.x = undefined;
        mouse.y = undefined;
    }
);

init();
animate();