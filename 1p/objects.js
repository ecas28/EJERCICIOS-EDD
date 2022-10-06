console.log("agregar 10e3 pares (llave:valor) a un objeto")

let obj={'name':'name'}

for(let i=0; i<=5; i++){
  let nombre=('name'+ Math.floor(Math.random()*5))
  obj[nombre]=nombre
}
console.log(obj)