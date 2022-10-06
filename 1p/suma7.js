console.log("imprime la sumatoria de los múltiplos de 7 en el rango [200-300]")
//declarar las variables con los limites que ocupamos
var a = 200;
var b = 300;
var sumar = 0;
//iniciar nuestro ciclo de a hasta b, donde a es menor o igual a b
while(a<=b){
  //sacar los multiplos de 7
  if(a%7 == 0){
    //realizar la suma
    sumar=sumar+a
    //mostrar en la consola los resultados
    console.log(sumar)
  }
  //a va a ir incrementando
  a++
}