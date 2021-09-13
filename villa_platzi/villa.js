var vp = document.getElementById("background");
var paper = vp.getContext("2d");
var mapa = "tile.png";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", draw);

function draw(){
    paper.drawImage(imagen, 0, 0); 
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
