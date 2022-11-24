// your binary tree solution here

//INTEGRANTES 3F
//Aranda Peregrina Nereo Uriel
//Castrejón Mejía Evelyn Fernanda
//Cervantes Ramírez José Luis
//Torres Lozoya Jorge Antonio
//Verdín Aguilar Mónica Gabriela

import {BinaryTree} from '../../../efcm/tree/BinaryTree.js'
  let tree = new BinaryTree()

  tree.insert(4)
  tree.insert(2)
  tree.insert(6)
  tree.insert(3)
  tree.insert(9)
  tree.insert(-1)
  tree.insert(3)
  tree.insert(8)
  console.log('PreOrden');
  tree.preorder()