"use strict";

//GLOBAL VARIABLES
/*var x = 1;
window.moo = 1;


//LOCAL VARIABLES
function moo() {
    var foo = 1;
}



{
    let a = "block";
    const b = "b";
    {
        console.log(a);
    }
    b = "moo";
}
console.log(a);*/


//SCOPE CHAIN
function goo() {
    var myvar = 1;

    function foo() {
        console.log(myvar);
    }
    foo();
}

goo();


//FUNCTION CLOSURES
function sayHello(name) {
    var text = 'Hello ' + name;
    return () => console.log(text);
}

sayHello('Jose')();

var jose = sayHello('jose');
jose();



var zoo = [];
for(var i = 0; i < 10; i++) {
    (function() {
        var y = i;
        zoo[i] = function() {return y};
    })();
}

console.log(zoo[0]());
console.log(zoo[1]());
console.log(zoo[2]());