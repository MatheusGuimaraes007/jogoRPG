import Characters from "./characters.js";
import Barbaro from "./Barbaro.js";
import Sorcerer from "./Sorcerer.js";
import Orc from "./Orc.js";
import Drow from "./Drow.js";

//Pegando informações do nome do personagem 1 e fazendo apresentação
const nameChar = document.querySelector('#name');
const classeChar = document.querySelector('#class');
const sendChar = document.querySelector('#sendChar');
const namefighter = document.querySelector('#fighter .nome-lutador');
const nameMonster = document.querySelector('#mob .nome-lutador');
const monster = document.querySelector('#monsters');
const fighter = document.querySelector('#fighter');
const mob = document.querySelector('#mob');
const lutadores = document.querySelector('.lutadores h1');
const logEvents = document.querySelector('.log');

class Log {
    list = [];
    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessege(msg) {
        this.list.unshift(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}
sendChar.addEventListener('click' , (event) => {
    event.preventDefault();
    let name = nameChar.value;
    let classe = classeChar.value.toUpperCase();
    let monsters = monster.value.toUpperCase();
    
    let barbaro = new Barbaro(name);
    let sorcerer = new Sorcerer(name);
    let orc = new Orc();
    let drow = new Drow();
    const log = new Log(logEvents)
    

    if (classe == 'BARBARO'  &&  monsters == 'MONSTER1') {
        const stage = new Stage(
            barbaro,
            orc,
            fighter,
            mob,
            log,
        )
        stage.start();
        lutadores.innerHTML = `${name} VS Orc`;
    } else if (classe == 'SORCERER' && monsters == 'MONSTER1') {
        const stage = new Stage(
            sorcerer,
            orc,
            fighter,
            mob,
            log,
        )
        stage.start();
        lutadores.innerHTML = `${name} VS Orc`;
    } else if (classe == 'BARBARO' && monsters == 'MONSTER2') {
        const stage = new Stage(
            barbaro,
            drow,
            fighter,
            mob,
            log,
        )
        stage.start();
        lutadores.innerHTML = `${name} VS Drow`;
    } else if (classe == 'SORCERER' && monsters == 'MONSTER2') {
        const stage = new Stage(
            sorcerer,
            drow,
            fighter,
            mob,
            log,
        )
        stage.start();
        lutadores.innerHTML = `${name} VS Drow`
    }
   
})

class Stage{
    constructor(fighter1 , fighter2 , fighter1El1 , fighter1El2, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El1 = fighter1El1;
        this.fighter1El2 = fighter1El2;
        this.log = logObject;
    }
    
    start() {
        this.update();

        this.fighter1El1.querySelector('.attackButton').addEventListener('click' , () => this.doAttack(this.fighter1 , this.fighter2));
        this.fighter1El2.querySelector('.attackButton').addEventListener('click' , () => this.doAttack(this.fighter2 , this.fighter1));
    }

    
    update() {
        //fighter 1
        namefighter.innerHTML = `${this.fighter1.life} de HP`
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El1.querySelector('.bar').style.width = `${f1pct}%`;
        //fighter 2
        nameMonster.innerHTML = `${this.fighter2.life} de HP`
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter1El2.querySelector('.bar').style.width = `${f2pct}%`;
    }

    doAttack(attacking , attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessege('Um morreu');
            return;
        }

        let attackFacotr = (Math.random() * 2).toFixed(1);
        let defenseFactor = (Math.random() * 2).toFixed(1);
        let actualAttack = attacking.attack * attackFacotr;
        let acctualDefense = attacked.defense * defenseFactor;

        if (actualAttack > acctualDefense) {
            attacked.life -= attacking.attack;
            this.log.addMessege(`${attacking.name} atacou ${attacked.name}`);
        } else {
            this.log.addMessege(`${attacked.name} defendeu o ataque de ${attacking.name}`);
        }
        this.update();
    }
}




