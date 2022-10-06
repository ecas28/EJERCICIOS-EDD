console.log("10e3,10e4,10e5, sin ordenar, tomar/mostrar pasos")

var array = [];
let num;

for(i = 0; i < 10000; i++){
num = Math.floor(Math.random() * 10000);
array.push(num);
};


function secuencial(num){
for(var i=0; i < array.length;i++){
  if(array[i]==num){
    console.log(num," está dentro del array")
    console.log("Pasos:", i)
      return   
  }
  
}return  console.log("No está")
}

//mostrar el array
console.log(array)
//secuencial
console.log(secuencial(0))