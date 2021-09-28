let cb = () => {
    console.log("setTimeout called");
}
//setTimeout(cb, 1000);


let add = (a,b) => a + b;
console.log(add(1,4));



let obj = {
    name: 'Jose',
    sayLater: function() {
        setTimeout(() => {
            console.log(`Hello ${this.name}`);    
        }, 1000);  
    }
}

obj.sayLater();

