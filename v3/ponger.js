var canvas = document.getElementById('mainCanvas');
var ctx;
var lines;

var liney = 10;
var linex = 5;
var linedx = 1;
var linedy = 1;

var x = 290;
var y = 290;
var dx = 1;
var dy = 1;

function init() {
    ctx = canvas.getContext('2d');
    lines = canvas.getContext('2d');
    return setInterval(draw, 1);
}

function draw() {

    lines.fillRect(280,0,3,10);
    lines.fillStyle = 'black';

    ctx.clearRect(0,0,300,300);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    x += dx;
    y += dy;
    if (x > 295 || x < 5 || ((y < 10) &&(x > 285))) {
         dx *= -1;   
    }
    if (y > 295 || y < 5) {
         dy *= -1;   
    }
}

init();
