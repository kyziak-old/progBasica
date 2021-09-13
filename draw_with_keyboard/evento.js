var cuadro = document.getElementById("area_dibujo");
var paper = cuadro.getContext("2d");
var x = 150;
var y = 150;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", keyboardDraw);
drawLines("red", 149, 149, 151, 151, paper);

// detect and draw using keyboard lines
function keyboardDraw(evento){
    var color = "blue";
    var move = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            drawLines(color, x, y, x, y - move, paper);
            y = y - move;
            break;
        case teclas.DOWN:
            drawLines(color, x, y, x, y + move, paper);
            y = y + move;
            break;
        case teclas.LEFT:
            drawLines(color, x, y, x - move, y, paper);
            x = x - move;
            break;
        case teclas.RIGHT:
            drawLines(color, x, y, x + move, y, paper);
            x = x + move;
            break;
        default:
            break;
    }
}

//Función para dibujar lineas
function drawLines(color, xinit, yinit, xend, yend, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xend, yend);
    lienzo.stroke();
    lienzo.closePath();
}