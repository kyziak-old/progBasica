var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var color_borde = "green";

// bottom-left corner
for (let l = 0; l < lineas; l++) {
    drawLines("#FAA", 0, 10*l, 10*(l + 1), 300);  
}

//top-right corner 
for (let l = 0; l < lineas; l++) {
    drawLines("#FAA", 10*l, 0, 300, 10*(l + 1));  
}

// center first cuadrant
for (let i = 0; i < lineas/2; i++) {
    drawLines("#AAF", 150, 10*i, 150 + 10*(i + 1), 150);  
}

//center second cuadrant
for (let i = 0; i < lineas/2; i++) {
    drawLines("#AAF", 10*i, 150, 150, 150 - 10*(i + 1));  
}

//center third cuadrant
for (let i = 0; i < lineas/2; i++) {
    drawLines("#AAF", 10*i, 150, 150, 150 + 10*(i + 1)); 
}

//center fourth cuadrant
for (let i = 0; i < lineas/2; i++) {
    drawLines("#AAF", 150, 300 - 10*i, 150 + 10*(i + 1), 150); 
}

//central and border lines
drawLines(color_borde, 1, 1, 1, 300); 
drawLines(color_borde, 1, 299, 299, 299); 
drawLines(color_borde, 299, 1, 299, 299); 
drawLines(color_borde, 1, 1, 299, 1); 
drawLines("#AAF", 0, 150, 300, 150); 
drawLines("AAF", 150, 1, 150, 299); 

function drawLines(color, xinit, yinit, xend, yend){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xend, yend);
    lienzo.stroke();
    lienzo.closePath();
}