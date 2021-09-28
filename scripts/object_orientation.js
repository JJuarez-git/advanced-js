"use strict";

//PSEUDO CLASSICAL OBJECT ORIENTATION
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.full_name = () => {
        return `${this.firstName} ${this.lastName}`; 
    }
    //Podemos crear las funciones dentro de una pseudoclase de esta manera para que todas las instancias tengan este metodo, la parte mala es que requerira mucha memoria para nuestra app
}

var dude = new Person('jose', 'carlos');

Person.prototype.full_name_prototype = function() {
    return `${this.firstName} ${this.lastName}`;
    //Esta es la forma mas eficiente y correcta de crear los metodos para las instancias
    //Podemos crear los metodos para las instancias en el prototype object asi las instancias no tendran este metodo dentro de ellas pero podran acceder a el
}

function Professional(honorific, firstName, lastName) {
    Person.call(this, firstName, lastName); //Esta llamada del call funciona como un super en Java, nos sirve para heredar las propiedades del padre 
    this.honorific = honorific;
}

Professional.prototype = Object.create(Person.prototype); //Tendremos que enlazar el prototype de professional con el de person si queremos heredar los metodos escritos en el prototype

Professional.prototype.professional_name = function() {
    return `${this.honorific} ${this.firstName} ${this.lastName}`;
}

var pro = new Professional('Dr.', 'jose', 'carlos');

//console.log(pro.professional_name());
//console.log(pro.full_name_prototype()); 


//PROTOTYPE OBJECT ORIENTATION
var Perx = {
    full_name: function() {
        return this.firstName + " " + this.lastName;
    }
}

var jose = Object.create(Perx, {
    firstName: {value:'Jose'},
    lastName: {value:'Carlos'}
});
console.log(jose.full_name());
