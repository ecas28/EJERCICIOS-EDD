//
// 
//

function preorder(n){
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}


//
// 
//

function preorder(n){
  if (n){//exists
    console.log(n.d)

    preorder(n.r)
    preorder(n.l)
  }
}