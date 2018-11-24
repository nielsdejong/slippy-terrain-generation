class Name {
    first: string;
    middle: string[];
    last: string;
    nickname: string;

    constructor( public firstName : string, public lastName: string ) {
        this.first = firstName;
        this.last = lastName;
    }
}


abstract class Person {
    name: Name;

}

class Student extends Person {
    name : Name;

    constructor(public firstName: string, public lastName: string) {
        super();
        this.name = new Name(firstName, lastName);

    }
}


function greeter(person : Person) {
    return "Hello, " + person.name.first + " " + person.name.last;
}

let user = new Student("Jane", "User");

document.body.innerHTML = greeter(user);