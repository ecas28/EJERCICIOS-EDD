console.time("Tiempo")//tiempo 

class QUEUE {
    //operaciones predeterminadas para la queue
    constructor() {
      this.data =[]
    }
    enqueue(e) {
      this.data.push(e)
      return this.data
    } 
    dequeue(){
      return this.data.shift()
    }
    front(){
      return this.data[0]
    }
    size(){
      return this.data.length
    }
    print(){
      return this.data
    }
  }

let q1 = new QUEUE(), q2 = new QUEUE() //var
let pasos=0
for (let i = 0; i < 1000; i++) {//ciclo para generar los núm
  let num = Math.floor(Math.random() * 1000)//generar núm aleatorio
let f1, f2, a=0  //var
while(a == 0){//1 ciclo1
  if(q1.empty == true){//2 cond1
    q1.enqueue(num)
pasos++
}//2              
else{//3
  if(num >= q1.front()){//4 con2
    f1=q1.front()
      q2.enqueue(f1) 
pasos++
  q1.dequeue()
pasos++
}//4   
  else{//5
    q2.enqueue(num) 
      pasos++
if(q1.size() > 0){//6 con3
while(q1.size() > 0){//7 ciclo2
  f1=q1.front()
   q2.enqueue(f1)
   pasos++
   q1.dequeue()
   pasos++
}//7
pasos++
}//6 
    a++
}//5
}//3
}//1   
if(q2.size() > 0){//cond
  while(q2.size() > 0){
    f2=q2.front()
  q1.enqueue(f2)
pasos++
  q2.dequeue()
pasos++
}
pasos++ 
}     
}

console.log(q1.print())//mostrar los datos
console.timeEnd("Tiempo")//tiempo terminado
console.log("Pasos:" + pasos)//pasos que tardó