import {Vector} from "./Vector";

export class Position extends Vector {

    public toString() : string {
        return "Position(" + super.toString() +")";
    }

    static default = new Position(0, 0,0 );
}