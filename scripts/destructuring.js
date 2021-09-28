const obj = { first: 'Jose', last: 'Carlos', age: 21 };

const { first: f, last } = obj; //Se estan creando dos constantes first y last que se llaman igual que las propiedades del objeto 

console.log(f);
console.log(last);



const arr = ['a', 'b'];

const { 0:x } = arr;
const [y,z] = arr;

console.log(x);
console.log(y);
console.log(z);



function fun({x}) {
    console.log(x);
}
fun({x:1});