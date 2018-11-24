import {Concept} from "../Concept";

export abstract class Vector extends Concept{
    x: number;
    y: number;
    z: number;

    constructor( public xNew : number, public yNew : number, public zNew : number ) {
        super();
        this.x = xNew;
        this.y = yNew;
        this.z = zNew;
    }

    public toString() : string {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
}
