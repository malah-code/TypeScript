/// <reference path="typings/jquery/jquery.d.ts" />
//module (container)
var module1;
(function (module1) {
    //Class
    var Greeter = (function () {
        //Constractor
        function Greeter(message) {
            this.greeting = message;
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