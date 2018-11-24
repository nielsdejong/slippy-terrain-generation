"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human_1 = require("./generated/entities/alive/Human");
var Position_1 = require("./generated/concepts/Position");
function greeter(person) {
    return "Hello, " + person.name.first + " " + person.name.last + "(" + person.health + ")" + person.pos;
}
var user = new Human_1.Human(Position_1.Position.default).withName("Bob", "Bobson");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=main.js.map