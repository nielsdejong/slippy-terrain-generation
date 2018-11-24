import {Concept} from "../Concept";

export class Name extends Concept {
    first: string;
    middle: string[];
    last: string;
    nicknames: string[][];

    constructor( public firstName : string, public lastName: string ) {
        super();
        this.first = firstName;
        this.last = lastName;
    }
}
