//Esto podria describirse como un tipo de herencia entre objetos

var animal = {
    kind: 'human'
};

console.log(animal);

//var jose = {};

//OPCION INCORRECTA
//jose.__proto__ = animal;//Estamos linkando el objeto jose con el objeto animal, por lo que jose podra acceder a las propiedades de animal
//jose.kind = 'igloo';//Podremos acceder a las propiedades del otro objeto pero cuando esta se actualice como en este caso, el objeto jose dejara de acceder a la propiedad 
                    //del prototype y creara una nueva en su mismo objeto

//console.log(animal.kind);
//console.log(jose.kind);


//OPCION CORRECTA
var jose = Object.create(animal, {food: {value:'mango'}});
console.log(jose);
