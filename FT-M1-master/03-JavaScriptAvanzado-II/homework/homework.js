"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, 
  retornando  valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */
function inc(x) {
  return x + 1;
}
let count = 0;
return function callsCounter() {
  count = inc(count);
  return count;
}
}


function cacheFunction(cb) {
  
/*  Ejercicio 2

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction  
   actúe como una memoria caché para el callback que recibe por parámetro (cb); 
  es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
    al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" 
  sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.
  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e 
  invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el 
  resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento,
   y su valor el resultado de la correspondiente invocación a cb) de manera que, 
   la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, 
   porque el resultado estará guardado en la "memoria caché".
  Ejemplo:
  function square(5){
    return (5 * 5)
  }
  const squareCache = cacheFunction(square)
  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará  squareCache(5)   
   // no volverá a invocar a square,  simplemente buscará en la caché cuál es el resultado de square(5) y
     lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 
  */
//cb(2) FUNCION --
 // cb(arg)
 // objeto[arg] = cb(arg)
    let objeto = {};
    return function (arg){
    if (objeto.hasOwnProperty(arg)){
      return objeto[arg];
    } else {
      objeto[arg] = cb(arg);
    } return objeto[arg]
  }
}
// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, 
  dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, 
  respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind (alumno);

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, 
  en las tres variables declaradas a continuación, 
  tres funciones que retornen una cadena (string) y 
  el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). 
  Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - 
  ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

var asterisco = {
  simbolo: "*",
};
var guiones = {
  simbolo: "-",
};
var underscore = {
  simbolo: "_",
};

function getSimbol(str) {
  return this.simbolo + str + this.simbolo;
}


let textoAsteriscos = getSimbol.bind(asterisco)
let textoGuiones = getSimbol.bind(guiones)
let textoUnderscore = getSimbol.bind(underscore)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
