import Characters from "./characters.js";


export default class Barbaro extends Characters{
    constructor(name) {
        super(name);
        this.life = 100;
        this.maxLife = 100;
        this.attack = 14;
        this.defense = 16;
    }
}