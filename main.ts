import {Human} from "./generated/entities/alive/Human";
import {Position} from "./generated/concepts/Position";

function greeter(person : Human) {
    return "Hello, " + person.name.first + " " + person.name.last + "(" + person.health + ")" + person.pos;
}

let user = new Human( Position.default ).withName( "Bob", "Bobson" );

document.body.innerHTML = greeter(user);