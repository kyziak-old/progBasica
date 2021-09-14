class Pakiman{
    constructor(nombre, vida, atk){
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = atk;
        this.imagen.src = imagenes[this.nombre];
    }

    talk(){
        alert(this.nombre);
    }

    show(){
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br/>");
        document.write("Ataque: " + this.ataque + "<hr/>");
        document.write("</p>")
    }
}