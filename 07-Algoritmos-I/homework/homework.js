'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var arrayfactor = [1];
  for (let i = 2; i <= num; i++){
    while(num%i === 0){
      arrayfactor.push(i);
      num=num/i;
    };
  };
  return arrayfactor;
  console.log(arrayfactor)
}
console.log(factorear(1));

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let j = 0 ; j < array.length; j++){
    for (let i = 0 ; i < array.length-j ; i++){
      if (array[i] > array[i+1]){
        [array[i],array[i+1]] = [array[i+1],array[i]];
        };
    };
  };
  return array
}

var array = [3,5,7,8,1,2]
bubbleSort(array)
console.log(array)

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  const longArray = array.length;
  for (let i = 1; i < longArray; i++) {
    let actual = array[i];
    let j = i -1;
    while (actual < array [j]) {
      array[j + 1] = array [j];
      j--;
    };
    array[j+1]= actual;
  };
  return array;

  /*
  array.sort((a, b) => {
    if(a == b) {
      return 0; 
    };
    if(a < b) {
      return -1;
    };
    return 1;
  });
  return array;
};
*/
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:


  for (let i = 0 ; i < array.length; i++) {
    let min = i
      for (let j = i+1 ; j < array.length; j++) {
      if (array[j] < array[min]){
        min = j
      };
    };
    let aux = array[i];
    array [i] = array [min];
    array [min] = aux 
  };
  return array
}

var array = [3,5,7,4,6,8,1,2]
selectionSort(array)
console.log(array)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
