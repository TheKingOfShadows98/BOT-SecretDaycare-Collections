import { Dice, getRandomInt } from "../Utilities/maths.js";
import { CURSES } from "./curses.js";
import { enchants } from "./enchants.js";
import { diaper_Names, getQualityname} from "./names.js";


export class Diaper{
    uid = '';
    nombre = '';
    lindura = 0;
    grosor = 0;
    absorbencia = 0;
    calidad = 0;

    encantamientos = [];
    maldiciones = [];

    
    show(){
        let text = `${this.nombre}\n`;
        text += `lindura: ${this.lindura}\n`;
        text += `grosor: ${this.grosor}\n`;
        text += `absorbencia: ${this.absorbencia}\n`;
        text += `calidad: ${getQualityname(this.calidad)}\n`;
        text += this.showEnchants();
        text += this.showCurses();
        return text;
    }

    showEnchants(){
        if(this.encantamientos.length  < 1) return '';
        let text = `encantamientos \n`;
        this.encantamientos.forEach(enc => {
            text += `> ${enc.name}\n`;
        });
        return text;
    }

    showCurses(){
        if(this.maldiciones.length  < 1) return '';
        let text = `maldiciones \n`;
        this.maldiciones.forEach(enc => {
            text += `> ${enc.name}\n`;
        });
        return text;
    }
    /**
     *
     */
    constructor() {
        this.nombre = diaper_Names[getRandomInt(0, diaper_Names.length - 1) ];
        this.uid = crypto.randomUUID();
        this.lindura = Dice(10);
        this.grosor = Dice(10);
        this.absorbencia = Dice(10);
        this.encantamientos = [];
        this.maldiciones = [];
        const free_enchants = enchants.map( x => x);
        const free_curses = CURSES.map( x => x);

        while (Dice(1000) <= 335){
            const enchant_amount = getRandomInt(0,2);
            for (let index = 0; index < enchant_amount; index++) {
                if(free_enchants.length == 0){continue};
                const enchant = free_enchants.splice(getRandomInt(0,free_enchants.length),1)[0];
                this.encantamientos.push(enchant);
            }
        }
        
        if(this.encantamientos.length > 1 && this.maldiciones.length < this.encantamientos.length)
            while (Dice(100) <= 80){
            const curses_amount = getRandomInt(1,2);
            for (let index = 0; index < curses_amount; index++) {
                if(free_curses.length == 0){continue};
                const curse = free_curses.splice(getRandomInt(0,free_curses.length),1)[0];
                this.maldiciones.push(curse);
            }
        }
        this.calidad = ((this.lindura + this.grosor + this.absorbencia) / 10) + (3 * this.encantamientos.length - this.maldiciones.length);
    }

    static objectFrom(data){
        const diaper = new Diaper();
        diaper.nombre = data.nombre;
        diaper.uid = data.uid;
        diaper.lindura = data.lindura;
        diaper.grosor = data.grosor;
        diaper.absorbencia = data.absorbencia;
        diaper.encantamientos = data.encantamientos;
        diaper.maldiciones = data.maldiciones;
        return diaper;
    }

}