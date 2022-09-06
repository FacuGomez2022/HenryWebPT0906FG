
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;      //MEMORIA1 X = 1
var a = 5;  //MEMORIA2 a = 5
var b = 10; //
var c = function(a, b, c) { 
   var x = 10;
   console.log(x);
   console.log(a);
         var f = function(a, b, c) {
            b = a;
          console.log(b);
            b = c;
            var x = 5;
   }
   f(a,b,c);
   console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x); 
```

```javascript
console.log(bar); //bar = undefined ----- undefined
console.log(baz); //baz = undefined ----- undefined
foo(); //foo() = OK EN UN TOQUE LO HAGO. PERO LO HAGO TRANQUI. ----- BUSCO QUE ES AH = "Hola!"
function foo() { console.log('Hola!'); } // CHE FOO ES ESTO!
var bar = 1; // BAR = 1 // no me interesa
baz = 2; // BAZ = 2 // atiendo boludos
```

```javascript
var instructor = "Tony"; // asigna
if(true) { //IF espera boolean FUERZA EL TRUE POR "(TRUE)"
    var instructor = "Franco"; //RE DECLARANDO !!
}
console.log(instructor); // FRANCO!
```

```javascript
var instructor = "Tony";
console.log(instructor); //TONY
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   } //NO ME OLVIDO. SINO QUE DEJO DE CITARLO. QUEDA APARTADO.
})();
console.log(instructor);
```

```javascript 
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 45px MAL!!! ES 9px. Primero suma 4+5 y después agrega px
"$" + 4 + 5 // $45
"4" - 2 //2
"4px" - 2 // NaN 
7 / 0 // !!! NI IDEA == Infinity
{}[0] // undefined 
parseInt("09") // 9
5 && 2 // SI NO ES FALSE DEVUELVE EL ULTIMO NUMERO
2 && 5 // 
5 || 0 // OR DEVUELVE EL VERDADERO Y LO DEVUELVE
0 || 5 
[3]+[3]-[10] // 33 - 10 -- CONCATENA Y DESPUES RESTA -- 23
3>2>1 // 3>2 == TRUE . TRUE > 1 == 1 > 1 === FALSE!!!
[] == ![] // TRUE!!!
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname; 

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(9);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() {console.log(23545);}, 500);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
