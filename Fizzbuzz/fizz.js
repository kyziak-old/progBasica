var numero = 100;

for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        document.write("Fizzbuzz <br />");
    }else if (i % 5 == 0){
        document.write("Buzz <br />");
    }else if (i % 3 == 0){
        document.write("Fizz<br />");
    }else{
        document.write(i + "<br />");
    }
}