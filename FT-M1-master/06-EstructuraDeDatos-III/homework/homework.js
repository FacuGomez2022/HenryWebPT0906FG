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
function BinarySearchTree(value) {
  this.value = value;
  this.left = null; //BinaryTree
  this.right = null; //BinaryTree
};

BinarySearchTree.prototype.size = function (suma = 1) { 
  if (this.value === null){
    return 0;
  }; 
  if (this.left === null && this.right === null){
    return 1;
  };
  if (this.left === null){
    return 1 + this.right.size();
  };
  if (this.right === null){
    return 1 + this.left.size();
  }; 
  return 1 + this.left.size() + this.right.size();
};

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
// //* true/false  true/false  true/false
};
BinarySearchTree.prototype.breadthFirstForEach = function (
  cb,
  arrayFlotante = []
) {
  cb(this.value);
  if (this.left) {
    arrayFlotante.push(this.left);
  }
  if (this.right){
    arrayFlotante.push(this.right);
  }
  if (arrayFlotante.length > 0){
    arrayFlotante.shift().breadthFirstForEach(cb, arrayFlotante);
  };
}; 
BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  switch(order){
    case "in-order":
      if (this.left){
        this.left.depthFirstForEach(cb, order);
      };
      cb (this.value);
      if (this.right) {
        this.right.depthFirstForEach (cb, order);
      };
      break;
      case "pre-order":
      cb (this.value);
      if (this.left){
        this.left.depthFirstForEach(cb, order);
      };
      if (this.right) {
        this.right.depthFirstForEach (cb, order);
      };
      break;
      case "post-order":
      if (this.left){
        this.left.depthFirstForEach(cb, order);
      };
      if (this.right) {
        this.right.depthFirstForEach (cb, order);
      };
      cb (this.value);
      break;
  };
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
