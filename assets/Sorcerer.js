import Characters from "./characters.js";


export default class Sorcerer extends Characters{
    constructor(name) {
        super(name);
        this.life = 70;
        this.attack = 20;
        this.defende = 8;
        this.maxLife = this.life;
    }
}