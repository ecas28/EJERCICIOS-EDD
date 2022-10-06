console.log("agregar 10e3 pares (llave:valor) a un objeto; extraer y ordenar llaves; crear nuevo objeto de pares")

let n=10000; i=0
let obj={'key': 'key'}

while (i < n){
   let keys= ('key'+ Math.floor(Math.random()*10000))
  obj[keys]=keys; i++
}
console.log(obj)

console.log(objeto.keys(obj).sort((p,q)=>p < q ? -1 : p > q ? 1 : 0))