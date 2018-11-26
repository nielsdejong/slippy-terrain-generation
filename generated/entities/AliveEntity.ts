import {Entity} from "./Entity";
import {Position} from "../concepts/Position";
import {Health} from "../concepts/Health";

export abstract class AliveEntity extends Entity {
    health : Health;

    constructor(public pos : Position, public maxHealthValue : number ) {
        super( pos );
        this.health = new Health( maxHealthValue );
    }
}
