"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
var abs = Math.abs;
var max = Math.max;
var min = Math.min;

function BinarySearchTree(value) {
  this.value = value;
  this.left = null; //BinaryTree
  this.right = null; //BinaryTree
}
BinarySearchTree.prototype.size = function () {
//HIEGHT
};
BinarySearchTree.prototype.contains = function (value) {};
BinarySearchTree.prototype.depthFirstForEach = function (value) {};
BinarySearchTree.prototype.breadthFirstForEach = function (value) {};
BinarySearchTree.prototype.insert = function (value) {
 if (value > this.value) {
  if (this.right !== null) {
    this.right.insert(value);
  } else {
    this.right = new BinarySearchTree(value);
  }
 } 
 if (value <= this.value) {
  if (this.left !== null) {
      this.left.insert(value);
  } else {
      this.left = new BinarySearchTree(value);
  }
  }
};
BinarySearchTree.prototype.contains = function (value) {
/*
if (this.value === value){
  return true
}
if (value < this.value && this.left){
return this.left.contains(value)
}
if (value > this.value && this.right){
return this.right.contains(value)
}
return false
*/
  return (
    (value === this.value ? true : false) || 
    (this.left ? this.left.contains(value) : false) || 
    (this.right ? this.right.contains(value) : false)
  );
  //* true/false  true/false  true/false
};

// let tree = new BinarySearchTree(20)
// tree.contains(2)
// tree.insert(2)
// tree.insert(4)
// tree.insert(4)
// tree.insert(4)
// tree.insert(4)
// console.log(tree.size())
// console.log (lengthbinary)
// console.log(typeof tree.insert)
// console.log(typeof tree.contains)
// console.log(typeof tree.insert)
// console.log(typeof tree.insert)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
