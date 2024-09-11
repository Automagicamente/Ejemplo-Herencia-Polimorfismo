const Personaje = require("./Personaje");
const PocionDanio = require("./PocionDanio");
const PocionVacia = require("./PocionVacia");

const VIDA_DEF = 50;

class Guerrero extends Personaje{
    #danio=40;

    /**
     * Inicializa el Guerrero
     * @param {Number} vida inical del Guerrero
     */
    constructor(vida=VIDA_DEF, pocion=new PocionDanio()){
        super(vida, pocion);
    }

    puedoUtilizar(estaPocion){
        return !(estaPocion instanceof PocionVacia);
    }

    aumentarDanioCon(estosPuntosDanio){
        this.#danio+=estosPuntosDanio;
        console.log("Ahora tengo de danio: "+ this.#danio);
        
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