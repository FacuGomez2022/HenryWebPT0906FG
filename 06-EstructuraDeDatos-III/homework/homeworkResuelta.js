"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor  existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
let bts = new BinarySearchTree(7)

BinarySearchTree.prototype.size = function(nodo = this){
  if (nodo == null ){
    return 0
      } else{
        return 1 + this.size(nodo.right) + this.size(nodo.left)
      }
}
BinarySearchTree.prototype.insert = function(value){
  if(value>this.value){
    if(this.right !== null){
      this.right.insert(value)
    }else{
      this.right = new BinarySearchTree(value)
    }
  }else{
    if(this.left !== null){
      this.left.insert(value)
    }else{
      this.left = new BinarySearchTree(value)
    }
  }
}
BinarySearchTree.prototype.contains = function(value){
  let current = this;
  let exist = false;
  while(!exist && current){
    if (value< current.value){
      if(current.left === null) return exist = false
      current = current.left
    }else if (value> current.value){
      if(current.right === null) return exist = false
      current = current.right
    }else{
    exist = true
  }
 }
 return exist
}

BinarySearchTree.prototype.depthFirstForEach = function(func, type){
  if(type === "pre-order"){ 
    func(this.value);
    if(this.left !== null){
      this.left.depthFirstForEach(func, type);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(func, type);
    }
}	else if(type === "post-order"){ 
    if(this.left !== null){
      this.left.depthFirstForEach(func, type);
    }
    if(this.right !== null){
      this.right.depthFirstForEach(func, type);
    }
    func(this.value);
} else{
    if(this.left !== null){
        this.left.depthFirstForEach(func, type);
    }
    func(this.value);
    if(this.right !== null){
          this.right.depthFirstForEach(func, type);
    }
}
}
BinarySearchTree.prototype.breadthFirstForEach = function(func, arr=[]){
  if (this.left !== null){
    arr.push(this.left)
  }
  if (this.right !== null){
    arr.push(this.right)
  }
  func(this.value)
  if (arr.length>0){
    arr.shift().breadthFirstForEach(func, arr)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
