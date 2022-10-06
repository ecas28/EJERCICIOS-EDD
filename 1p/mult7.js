console.log("imprime la multiplicatoria de los múltiplos de 7 en el rango [200-300]")
//declarar las variables con los limites que ocupamos
var a = 200;
var b = 300;
var multiplicar = 1;
//iniciar nuestro ciclo de a hasta b, donde a es menor o igual a b
while(a<=b){
  //sacar los multiplos de 7
  if(a%7 == 0){
    multiplicar=multiplicar*a
    //mostrar en la consola los resultados
    console.log(multiplicar)
  }
  //a va a ir incrementando
  a++
}