console.time("Tiempo")//tiempo inicio

class STACK {
  //operaciones predeterminadas para el stack 
constructor() {
  this.data = []
} 
push(e) {
  this.data.push(e)
    return this.data
}
pop() {
  return this.data.pop()
}
peek() {
  return this.data[this.data.length - 1]
}  
print() {
  console.log(this.data)
}
size() {
  return this.data.length
} 
}



let stack1 = new STACK(), stack2 = new STACK()
let pasos = 0

for (let i = 0; i <= 1000; i++) { //ciclo para generar los núm
    let num=Math.floor(Math.random()*1000)//generar núm aleatorio 
let peeks1, peeks2, a = 0
  
while (a == 0) {//1
  if (stack1.isEmpty == true) {//2
    stack1.push(num)
      pasos++ 
}//2          
else {//3
  if (num <= stack1.peek()) {//4
    peeks1 = stack1.peek()
      stack2.push(peeks1)
pasos++
stack1.pop()
pasos++ 
}//4           
else {//5
  stack1.push(num)
    pasos++
      a++ 
}//5  
}//3 
}//1 
if (stack2.size() > 0) {
  while (stack2.size() > 0) {
    peeks2 = stack2.peek()
      stack1.push(peeks2)
pasos++
stack2.pop()
pasos++
}
pasos++ 
}  
}

stack1.print()//mostrar los datos
console.timeEnd("Tiempo")//tiempo terminado
console.log("Pasos:" + pasos ) //pasos que tardó