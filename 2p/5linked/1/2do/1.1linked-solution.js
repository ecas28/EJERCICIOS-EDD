//GETTAIL Y CONTAINS JUNTOS
class N{
constructor(data) {
      this.data = data
      this.next = null}
}  
class LList{
constructor() {
      this.head = null
      this.currentSize = 0
}
append(data) { //linkedlist
const node = new N(data)//var
  if (this.head === null) { //condicion
    this.head = node} 
  else {
let a = this.head //var
while (a.next) { //ciclo
  a = a.next}
    a.next = node}
  this.currentSize++}
print() {
if (this.head === null) { //cond
  return null}
let a = this.head //var
while (a) {//ciclo
  console.log(a.data)//impr
    a = a.next}
}
getTail() {  //P2 getTail()
  if (this.head === null) {//cond
    return null}
let a = this.head //var
while (a.next) {//ciclo
  a = a.next}
  return a.data
}//cierre gettail
contains(data) { //P1 contains(v)
let a = this.head //var
while (a) { //ciclo
  if (a.data == data) {
    return true}
a = a.next}
  return false
}//cierre contains
  
}


let linkedlist = new LList()
//valores de la linkedlist
linkedlist.append(4)
linkedlist.append(5)
linkedlist.append(6)
linkedlist.print()//imprimir la lista
console.log(linkedlist.contains(6)) //saber si está un elemento //contains p1
console.log("GetTail: " + linkedlist.getTail()) //sacar el tail//getTail p2