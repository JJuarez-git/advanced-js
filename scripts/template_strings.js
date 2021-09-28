var msg = "hello world \nmy name is jose";
console.log(msg);

var name = "jose";
var text = `goodbye
world 
my name is "${name}"
and 1 + 2 is ${1 + 2}`;
console.log(text);


var isBold = true;
var msg2 = `hello world my name is ${isBold ? "<b>jose</b>" : "jose"}`;
console.log(msg2);


//TAGS 
function h1(strings, ...values) {
    var body = "";
    for(var i = 0; i < strings.length; i++) {
        body += strings[i] + (values[i] || "");
    }
    return `<h1>${body}</h1>`;
}

var place = "world";
h1`hello ${place} my name is ${name}`;