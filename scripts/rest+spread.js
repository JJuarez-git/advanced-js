"use strict";

function sum(a, b) {
    console.log(arguments);
    return a + b;
}

//sum(1,2,3,4);


/*function login(method) {
    var options = Array.prototype.slice.call(arguments, 1);
    console.log(method);
    console.log(options);
}

login("facebook", 1, 2, 3, 4);*/


function login(method, ...options) { //REST Es el resto de los argumentos introducidos
    console.log(method);
    console.log(options);
}

login("facebook", 1, 2, 3, 4);


var ar1 = [4, 5, 6];
var ar2 = [1, 2, 3, ...ar1]; //SPREAD Reparte los elementos del primer array en posiciones del segundo array 
console.log(ar2);


var method = "twitter";
var options = ["key", "callbackUrl"];
login(method, ...options); //SPREAD