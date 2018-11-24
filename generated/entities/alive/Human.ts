import {Name} from "../../concepts/Name";
import {AliveEntity} from "../AliveEntity";
import {Position} from "../../concepts/Position";

export class Human extends AliveEntity{
    static DEFAULT_MAX_HEALTH =  100;

    name: Name;

    constructor(public pos : Position ) {
        super( pos, Human.DEFAULT_MAX_HEALTH );
    }

    withName( first : string, last : string ) : Human {
        this.name = new Name( first, last );
        return this;
    }
}
