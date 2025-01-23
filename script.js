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

// const backgroundCanvas = document.getElementById('background__canvas');
// const ctx = backgroundCanvas.getContext('2d');

//     backgroundCanvas.width = window.innerWidth;
//     backgroundCanvas.height = window.innerHeight;

//     ctx.fillStyle = 'white';
//     ctx.fillRect(10, 10, 150, 50)