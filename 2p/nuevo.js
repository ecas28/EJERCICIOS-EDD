console.time("Tiempo")//tiempo iniciado

class STACK {

  //operaciones predeterminadas para el stack
  
    constructor() {
        this.data = []
    }//
  
    push(element) {
        this.data.push(element)
        return this.data
    }
  
    pop() {
        return this.data.pop()
    }
  
    peek() {
        return this.data[this.data.length - 1]
    }//
  
    print() {
        console.log(this.data)
    }
  
    size() {
        return this.data.length
    }//
   
}



let stack1 = new STACK();
let stack2 = new STACK();
let pasos = 0;

for (let i = 0; i <= 1000; i++) { //ciclo para generar los núm
    let num=Math.floor(Math.random()*1000)//generar núm aleatorio
  
    let peekstack1, peekstack2, a = 0

    while (a == 0) {
        if (stack1.isEmpty == true) {
            stack1.push(num)
            pasos++
        }
        else {
            if (num <= stack1.peek()) {
                peekstack1 = stack1.peek()
                stack2.push(peekstack1)
                pasos++
                stack1.pop()
                pasos++
            } else {
                stack1.push(num)
                pasos++
                a++
            }
        } 
    }

  
    if (stack2.size() > 0) {
        while (stack2.size() > 0) {
            peekstack2 = stack2.peek()
            stack1.push(peekstack2)
            pasos++
            stack2.pop()
            pasos++
        }
        pasos++
    }
}


stack1.print()//mostrar la pila
console.timeEnd("Tiempo")//tiempo terminado
console.log("Pasos:" + pasos ) //pasos que tardó