var Name = /** @class */ (function () {
    function Name(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.first = firstName;
        this.last = lastName;
    }
    return Name;
}());
///<reference path="name.ts"/>
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = new Name(firstName, lastName);
    }
    return Person;
}());
///<reference path="person.ts"/>
function greeter(person) {
    return "Hello, " + person.name.first + " " + person.name.last;
}
var user;
user = new Person("Jane", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=main.js.map