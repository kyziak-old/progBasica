class Billete{
    constructor(valor, cantidad){
        this.valor = valor;
        this.cantidad = cantidad;
        this.img = new Image();
        this.img.src = imagenVector[this.valor];
    }
}