const backgroundCanvas = document.getElementById('background__canvas');
const ctx = backgroundCanvas.getContext('2d');
backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 150, 50)