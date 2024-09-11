const Personaje = require("./Personaje");

class Curador extends Personaje {
    #puntosCuracion = 200;
    
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
}

module.exports = Curador;