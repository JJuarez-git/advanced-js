(function(){
  var a = 3;
})();
console.log(typeof a);
console.log("a defined? " + (typeof a !== 'undefined'));

console.log((function f(n) 
    {
        return ((n > 1) ? n * f(n-1) : n)
    })(4));


(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);