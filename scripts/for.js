let array = [1,2,3];

//FOR NORMAL
for(let i = 0; i < array.length; i++) {
    //console.log(array[i]);
}


//FOR EACH
array.forEach((value) => {
   //console.log(value); 
});


//FOR IN Usado para loopear dentro de las propiedades de objetos
var obj = {a:1,b:2};

for(let prop in obj){
    console.log(`${prop}: ${obj[prop]}`);
}


//FOR OF Usado para loopear dentro de arrays
for(let value of array){
    console.log(value);
}