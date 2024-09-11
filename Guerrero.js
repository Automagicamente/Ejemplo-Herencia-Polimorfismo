const Personaje = require("./Personaje");

const VIDA_DEF = 150;

class Guerrero extends Personaje{
    #danio=40;

    /**
     * Inicializa el Guerrero
     * @param {Number} vida inical del Guerrero
     */
    constructor(vida=VIDA_DEF){
        super(vida);
    }

    /**
     * Ataca a un personaje
     * @param {Personaje} unPersonaje a ser atacado
     */
    atacarA(unPersonaje){
        console.log("Atacando a un "+unPersonaje.constructor.name );
        unPersonaje.defendeteDeEste(this.#danio);
    }

  
    usarHabilidadCon(unPersonaje){
        this.atacarA(unPersonaje);
    }
}

module.exports = Guerrero;