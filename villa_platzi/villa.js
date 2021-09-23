var vp = document.getElementById("background");
var paper = vp.getContext("2d");
var mapa = "tile.png";
var cantidad = aleatorio(5, 25);
var fondo = {
    url: "tile.png",
    cargaOK: false
}

var cow = {
    url: "vaca.png",
    cargaOK: false
};

fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener("load", loadBack);

// add vaca
cow.image = new Image();
cow.image.src = cow.url; 
cow.image.addEventListener("load", loadCows);

//agregar pollo
//var chicken = new Image();
//chicken.src = "pollo.png";
//chicken.addEventListener("load", chargeChickens);

//agregar cerdo
//var pig = new Image();
//pig.src = "cerdo.png";
//pig.addEventListener("load", chargePigs);

function loadBack(){
    fondo.cargaOK = true;
    draw();
}

function loadCows(){
    cow.cargaOK = true;
    draw();
}
//dibujar el fondo
function draw(){
    if (fondo.cargaOK){
       paper.drawImage(fondo.image, 0, 0); 
    }
    if (cow.cargaOK){
        console.log(cantidad);
        for(var v = 0; v < cantidad; v++){
        	var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            paper.drawImage(cow.image, x, y);
        }
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
