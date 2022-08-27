"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) {
    return []
  };
  let arrayizq = [];
  let arrayder = [];
  var max = array.length-1;
  var x = Math.floor(Math.random()*max);
  var pivot = array[x];
  console.log(array);
  console.log(x)
  console.log(pivot);

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot && i !== x) {
      arrayizq.push(array[i]);
    };
    if (array[i] > pivot && i !== x) {
      arrayder.push(array[i]);
    }; 
  };
  // console.log(quickSort(arrayizq))
  // console.log(quickSort(arrayder))
  return [].concat(quickSort(arrayizq),pivot,quickSort(arrayder));  
}
var array = [5,2,9,3,8];
quickSort(array);
console.log(quickSort(array))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var arrayfinal = []
  if (array.length === 2) {
    if (array[0] > array[1]){
      [array[0],array[1]] = [array[1],array[0]];
      };
    return array
  };
  if (array.length === 1) return array

  let arrayizq = [];
  let arrayder = [];
  var x = Math.floor(array.length/2);
  console.log(array);
  console.log(x)
  let i = 0;
  while (i <= x){
    arrayizq.push(array[i])
    console.log(array[i])
    i++    
  };
  while (i > x && i < array.length){
    arrayder.push(array[i])
    console.log(array[i])
    i++
  };
  console.log(arrayizq)
  console.log(arrayder)
  arrayizq = mergeSort(arrayizq)
  arrayder = mergeSort(arrayder)
  console.log(arrayizq)
  console.log(arrayder)
  
  while (arrayizq.length !== 0 || arrayder.length !== 0){
  if (arrayder[0] === undefined){
    arrayfinal.push(arrayizq.shift())
  } else if (arrayizq[0] === undefined){
    arrayfinal.push(arrayder.shift())
    console.log(arrayder)
  } else if (arrayizq[0] < arrayder[0]){   
    arrayfinal.push(arrayizq.shift())
  } else {
    arrayfinal.push(arrayder.shift())
  }
};
  console.log(arrayfinal)
  return arrayfinal
}
var array = [5,2,9,3,8];
mergeSort(array);
console.log(mergeSort(array))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
