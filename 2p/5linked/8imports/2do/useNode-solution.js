//
//
//
import {LinkedList} from '../../../efcm/linked/listasenlazadas.js'

let list = new LinkedList()
list.append("a")
list.append("b")
list.append("c")
list.append("d")
console.log(list.insertAfter("a","b"))
console.log(list.insertBefore("d","c"))
list.print()
