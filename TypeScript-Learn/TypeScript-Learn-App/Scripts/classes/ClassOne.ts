class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(meters: number = 0) {
        alert(this.name + " moved " + meters + "m.  ==> from Animal");
    }
}


class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 45) {
        alert("from Horse - Galloping...");
        super.move(meters);
    }
}


class anything extends Horse {
    move(meters = 100) {
        alert("from anything...");
        super.move(meters);
    }
}

var anythingVar : Animal = new anything("this is anything");
anythingVar.move();


class Animal_p {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    move(meters: number) {
        alert(this.name + " moved " + meters + "m.");
    }
}

var anima2 = new Animal_p('animal name');
