var caja = [];
var entregado = [];

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 30));
caja.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var paper = 0;

var button = document.getElementById("boton");
button.addEventListener("click", takeMoney);

var resultado = document.getElementById("resultado");

function takeMoney(){
    dinero = parseInt(document.getElementById("dinero").value);
    for (var bill of caja){
        if(dinero > 0){
            div = Math.floor(dinero/bill.valor);
            if(div > bill.cantidad){
                entregado.push(new Billete(bill.valor, bill.cantidad));
                dinero = dinero - bill.valor*bill.cantidad;
            }else {
                entregado.push(new Billete(bill.valor, div));
                dinero -= bill.valor*div;
            }
        }
    }
    console.log(dinero);
    if(dinero > 0){
        resultado.innerHTML = "Lo siento, mi configuración no me permite entregarte dicha cantidad. :c";
    }else{
        for(var e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += " billetes de $" + e.valor + "<br />";
            }
        }
    }
}