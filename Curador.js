const Personaje = require("./Personaje");
const PocionCuracion = require("./PocionCuracion");

const VIDA_CURADOR_DEF = 50;

class Curador extends Personaje {
    #puntosCuracion = 200;

    constructor(vida=VIDA_CURADOR_DEF, pocion=new PocionCuracion()){
        super(vida, pocion);
    }

    /**
     * Cura a un personaje
     * @param {Personaje} unPersonaje a curar
     */
    curarA(unPersonaje) {
        console.log("Curando a un " + unPersonaje.constructor.name);
        if (unPersonaje.faltaVida()) {
            unPersonaje.serCuradoCon(this.#puntosCuracion);
        } else {
            console.log("Este " + unPersonaje.constructor.name + " tiene la vida completa");
        }
    }


    usarHabilidadCon(unPersonaje) {
        this.curarA(unPersonaje);
    }

    puedoUtilizar(estaPocion){
        return estaPocion instanceof PocionCuracion;
    }
}

module.exports = Curador;