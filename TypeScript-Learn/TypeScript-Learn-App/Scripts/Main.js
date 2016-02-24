/// <reference path="typings/jquery/jquery.d.ts" />
//module (container)
var module1;
(function (module1) {
    //Class
    var Greeter = (function () {
        //Constractor
        function Greeter(message) {
            this.bool1 = true;
            this.number1 = 12.2;
            this.arr1 = ['val1', 'val2', 'val3'];
            this.func1 = function (argg) { return 'd'; };
            this.anim = null;
            this.anim2 = null;
            this.animSt = null;
            this.orderDate = null;
            //obj
            this.obj1 = { name: 'sdf', age: 19 };
            this.func3 = function () { return true; };
            //obj contain function, and function call object property
            this.obj2 = {
                x: 10,
                y: 20,
                area: function () {
                    return this.x * this.y;
                }
            };
            //function accept typed object
            this.functObj = function (box) {
                return box.h * box.w;
            };
            this.greeting = message;
            this.box1 = { h: 43 };
            this.box1 = { h: 43, w: 45 };
            //this.box1 = { hhh: 43 };//wrong
            //this  is just var not class property
            var nameSt = this.arr1[0];
            this.func1('sdf');
        }
        //method
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    var greeter = new Greeter("world");
    //regular javascript/jquery
    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        alert(greeter.greet());
        $('#Div1').text('this is message from Jquery');
    };
    document.body.appendChild(button);
})(module1 || (module1 = {}));
//# sourceMappingURL=Main.js.map