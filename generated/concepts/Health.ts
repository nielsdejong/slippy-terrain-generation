import {Concept} from "../Concept";

export class Health extends Concept {
    value : number;
    max : number;

    constructor( public maxHealth : number ) {
        super();
        this.max = maxHealth;
        this.value = maxHealth;
    }

    public toString() : string {
        return "Health(" + this.value + "/" + this.max + ")";
    }
}