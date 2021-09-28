"use strict";
function a(x, y) {
    //Las funciones son en realidad objetos que a su vez tienen propiedades que son funciones
    console.log(this);
    console.log(x);
    console.log(y);
}

a.moo = 1;

console.log(a.prototype);
console.log(a.toString());

a();
//a() y a.call() son lo mismo, se utiliza para llamar a la funcion
a.call({}, 1, 2); //CALL
//Usando el modo estricto podremos darle el valor que queramos a this pasando por argumento
//el primer argumento sera para darle valor al this y los siguiente seran para darle valor a los argumentos que hemos puesto en la function 'x' e 'y'

function sum() {
    var total = 0;
    for(let value of arguments) {
        total += value;
    }
    return total;
}

var arr = [1,2,3,4,5];
sum.apply(null, arr); //APPLY
//Apply funciona similar a call, pero apply se utliza para pasar arrays por parametro y call para valores normales



var b = function() {
    console.log(this);
}.bind({x:1}); //BIND

//b = b.bind(5); Otra forma de asginar con bind

b();
//Con bind tambien podremos asignar un valor a this dentro del contexto de la funcion, pero solo funcionara si esta es una function expression