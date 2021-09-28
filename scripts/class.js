class Person {
    _firstName = "";
    _lastName = "";

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;    
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = name;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = name;
    }

    whoAreYou() {
        return `Hi i'm ${this.fullName()}`;
    }
}


class Student extends Person {
    _course = "";

    constructor(firstName, lastName, course) {
        super(firstName, lastName); //Siempre poner primero el super antes que el this de cualquier propiedad
        this._course = course;
    }

    get course() {
        return this._course;
    }

    set course(course) {
        this._course = course;
    }

    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`
    }
}

var x = new Person('jose', 'carlos');
console.log(x.whoAreYou());


var y = new Student('pedro', 'garcia', 'bachellor');
console.log(y.whoAreYou());