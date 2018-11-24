var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Name = /** @class */ (function () {
    function Name(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.first = firstName;
        this.last = lastName;
    }
    return Name;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.name = new Name(firstName, lastName);
        return _this;
    }
    return Student;
}(Person));
function greeter(person) {
    return "Hello, " + person.name.first + " " + person.name.last;
}
var user = new Student("Jane", "User");
document.body.innerHTML = greeter(user);
