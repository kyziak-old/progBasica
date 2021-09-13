var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

// traer botón y caja de texto
var txt = document.getElementById("text_lines");
var button = document.getElementById("button_lines");
button.addEventListener("click", drawByClick);

//Función para dibujar lineas
function drawLines(color, xinit, yinit, xend, yend){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit, yinit);
    lienzo.lineTo(xend, yend);
    lienzo.stroke();
    lienzo.closePath();
}

//Función para dibujar por click
function drawByClick(){
    var lineas = parseInt(txt.value);    
    var color_borde = "green";
    var espacio = ancho/lineas;
    lienzo.clearRect(0, 0, d.width, d.height);

    // bottom-left corner
    for (let l = 0; l < lineas; l++) {
            drawLines("#FAA", 0, espacio*l, espacio*(l + 1), 300);  
        }

    //top-right corner 
    for (let l = 0; l < lineas; l++) {
        drawLines("#FAA", espacio*l, 0, 300, espacio*(l + 1));  
    }

    // center first cuadrant
    for (let i = 0; i < lineas/2; i++) {
        drawLines("#AAF", 150, espacio*i, 150 + espacio*(i + 1), 150);  
    }

    //center second cuadrant
    for (let i = 0; i < lineas/2; i++) {
        drawLines("#AAF", espacio*i, 150, 150, 150 - espacio*(i + 1));  
    }

    //center third cuadrant
    for (let i = 0; i < lineas/2; i++) {
        drawLines("#AAF", espacio*i, 150, 150, 150 + espacio*(i + 1)); 
    }

    //center fourth cuadrant
    for (let i = 0; i < lineas/2; i++) {
        drawLines("#AAF", 150, 300 - espacio*i, 150 + espacio*(i + 1), 150); 
    }

    //central and border lines
    drawLines(color_borde, 1, 1, 1, 300); 
    drawLines(color_borde, 1, 299, 299, 299); 
    drawLines(color_borde, 299, 1, 299, 299); 
    drawLines(color_borde, 1, 1, 299, 1); 
    drawLines("#AAF", 0, 150, 300, 150); 
    drawLines("AAF", 150, 1, 150, 299); 
}
