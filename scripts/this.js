//console.log(this);

//this.jose = 1;

//console.log(this.jose);
//console.log(window.jose);
//console.log(jose);


/*function checkThis() {
    console.log(this);
}

checkThis();*/

var jose = {
    checkThis: function() {
        var self = this;

        function checkOther() {
            console.log(self);
            self.moo = 1;
        }
        checkOther();
    }
}

jose.checkThis();
//console.log(jose);

//var func = jose.checkThis;
//func();