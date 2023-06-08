import Characters from "./characters.js";



export default class Orc extends Characters{
    constructor() {
        super('Orc');
        this.life = 130;
        this.attack = 14;
        this.defense = 10;
        this.maxLife = this.life;
    }
}