var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

drawLines("pink", 10,300,200,10);
drawLines("yellow", 300,10,10,220);

function drawLines(color, xinit, yinit, xend, yend){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xend, yend);
    lienzo.stroke();
    lienzo.closePath();
}

