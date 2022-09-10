'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que,
 siendo n un número natural, su factorial (representado como n!) 
 es el producto de n por todos los números naturales menores que él y mayores a 0. 
 Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci,
tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma,
y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado 
de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 
de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, 
al terminar de resolver este problema pueden intentar definir funciones que logren 
los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 1 || n === 0) return 1;
  if (n < 0) return 0;  
  return n * nFactorial(n-1)
}

function nFibonacci(n) {
  let a = 0;
 let b = 1;
 let c = 0;
 if(n === 1){
   return 1;
 }
 for(let i = 0; i < n - 1; i++){
   c = a + b;
   a = b;
   b = c;
 }
 return c;
}

for(let i = 0; i <= 10; i++) {
  console.log(nFibonacci(i));
}
//otra opción sería: 
//function nFibonacci(n){
// if (n===0) return 0;
// if (n<3) return 1;
//return nFibonacci(n-1)+nFibonacci(n-2);


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO,
 donde el primer elemento que ingresa es el primero que se quita. 
 Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. 
  Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {

    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.largo = 0

    this.size = function() {
      return this.largo;
    }

    this.enqueue = function(data) {
        this.dataStore.push(data);
        this.largo++;
    }

    this.dequeue = function() {
        if (this.largo===0){
          return undefined
        } else {
          this.largo--;
          return this.dataStore.shift();
      }
    }
}
/*
function Queue() {
 this.array = []

 Queue.prototype.enqueue = function(valor) {
    this.array.push(valor);
 }
 Queue.prototype.dequeue = function() {
return this.array.shift();
 
}
Queue.prototype.size = function() {
 return this.array.length;
}
}
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};