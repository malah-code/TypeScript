/// <reference path="typings/jquery/jquery.d.ts" />

//module (container)
module module1 {
    interface intObjOne { x: number, y?: number, title?: string }
    interface intFuncOne {
        (x: number, y: number, title: string): number;
    }

    interface StringArray {
        [index: number]: string;
    }
    interface Dictionary {
        [index: string]: string;
    }

    interface intClass1 {
        properOne: string;
        methodOne(x: number, y: string);
    }

    interface intClass2 extends intClass1 {
        properTwo: string;
    }

    class clsFromInterface implements intClass1  {
        properOne: string;
        methodOne: () => string;
    }

    //Class
    class Greeter {
        
        //Properties
        greeting: string;
        bool1: boolean = true;
        number1: number = 12.2;
        number2: number; //==> not set then the default will be undefined
        arr1: string[] = ['val1', 'val2', 'val3'];
        func1: (argg: string) => string = function (argg) { return 'd' };

        anim: any = null;
        anim2 = null;
        animSt: string = null;
        orderDate: Date = null;
        objFromInterface: intObjOne;

        //obj
        obj1: Object = { name: 'sdf', age: 19 };
        func3: Function = function () { return true; };
        box1: { h: number, w?: number };//typed Object
        FuncFromInterface: intFuncOne = function () {
            return 2;
        };

        //obj contain function, and function call object property
        obj2 = {
            x: 10,
            y: 20,
            area: function () {
                return this.x * this.y;
            }
        };

        //function accept typed object
        functObj = function (box: { h: number, w: number }) {
            return box.h * box.w;
        };

        //Constractor
        constructor(message: string) {
            this.greeting = message;
            this.box1 = { h: 43 };
            this.box1 = { h: 43, w: 45 };
            //this.box1 = { hhh: 43 };//wrong

            var ddd: Dictionary;
            ddd["gf2"] = "5";
            
            //this  is just var not class property
            var nameSt: string = this.arr1[0];
            this.func1('sdf');
            this.objFromInterface = { x: 1, title: 'sdf' };
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
        greeter.FuncFromInterface(11, 22, "wer");
        alert(greeter.greet());
        $('#Div1').text('this is message from Jquery');
    }
    document.body.appendChild(button);
}