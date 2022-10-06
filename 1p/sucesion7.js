console.log("imprime la sucesión de los múltiples de 7 en el rango [200-300]")
//declarar las variables con los limites que ocupamos
var a = 200;
var b = 300;
//iniciar nuestro ciclo de a hasta b, donde a es menor o igual a b
while(a<=b){
  //sacar los multiplos de 7
  if(a%7 == 0){
    //mostrar en la consola los resultados
    console.log(a)
  }
  //a va a ir incrementando
  a++
}