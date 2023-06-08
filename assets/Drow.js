import Characters from "./characters.js";



export default class Drow extends Characters{
    constructor() {
        super('Drow');
        this.life = 100;
        this.attack = 18;
        this.defense = 6;
        this.maxLife = this.life;
    }
}