/// <reference path="typings/jquery/jquery.d.ts" />

//module (container)
module module1 {
    //Class
    class Greeter {
        //Property
        greeting: string;
        //Constractor
        constructor(message: string) {
            this.greeting = message;
        }

        //method
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    var greeter = new Greeter("world");

    //regular javascript/jquery
    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        alert(greeter.greet());
        $('#Div1').text('this is message from Jquery');
    }
    document.body.appendChild(button);
}