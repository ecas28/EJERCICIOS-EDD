class Queues {

  constructor() {
    this.data = []
    this.top = 5 //cuantos elementos hay en la queue
  }
  
  enqueue(e) { //meter a la queue
    if (this.isFull())
      return 'Full' //indicar si está llena
    else {
      this.data.push(e)
      //console.log(e + "Agregado a la queue")
      return e + ' Entró a la queue.'
    }

  }
  
  dequeue() { //sacar de la queue
    if (this.isEmpty())
      return 'Empty' //indicar si está vacía
    else
      return this.data.shift() + ' Salió de la queue.'
  }

  size() {
    return this.data.length
  }
  
  print() {
    console.log(this.data)
  }

  
  isEmpty() {
    return this.data.length === 0
    //if (this.data.length === 0){
      //console.log("Está vacía:") //true
      //return true}
    //else
      //return false
  }

  
  isFull() {
    if (this.data.length === this.top)
      return true 
    else
      return false
  }
  

}


let q = new Queues()

//predeterminar los valores de la queue
console.log(q.enqueue(4))
console.log(q.enqueue(0))
console.log(q.enqueue(3))
console.log(q.enqueue(2))
console.log(q.enqueue(1))
console.log(q.enqueue(5))
console.log(q.isEmpty())//false porque la queue tiene elementos
console.log(q.size() + " tamaño de la queue cuando tiene elementos.")

q.print()//imprimir la queue 

console.log(q.dequeue())
//q.print()//mover dependiendo cuantos elementos que salieron queremos que imprima
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.isEmpty())//true porque la queue está vacía
console.log(q.size()+ " tamaño de la queue cuando no tiene elementos.")
