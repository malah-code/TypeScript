var passcode = "secret passcode";

class Employee {
    private _fullName: string;
    private _firstName: string;

    get firstName(): string {
        return this._firstName;
    }
    set firstName(theName : string) {
        this._firstName = theName;
    }
    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            alert("Error: Unauthorized update of employee!");
        }
    }

    static vacationDays: number = 0;
}


var emp = new Employee();
emp.firstName = 'dfd';
emp.fullName = 'ewrewr ewr';
