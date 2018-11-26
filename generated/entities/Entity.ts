import {Concept} from "../Concept";
import {Acceleration} from "../concepts/Acceleration";
import {Position} from "../concepts/Position";

export abstract class Entity extends Concept {
    position : Position;
    acceleration : Acceleration;

    constructor( public pos : Position ) {
        super();
        this.position = pos;
        this.acceleration = Acceleration.NONE;
    }
}
