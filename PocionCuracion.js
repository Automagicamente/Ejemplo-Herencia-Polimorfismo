const Pocion = require("./Pocion");

class PocionCuracion extends Pocion {
    #puntosCuracion = 70;

    /**
     * La pocion es consumida aplicando sus efectos al Personaje
     * @param {Personaje} unPersonaje que consume la pocion
     */
    serConsumidaPor(unPersonaje) {
        console.log("Curando");
        unPersonaje.serCuradoCon(this.#puntosCuracion);
    }
}

module.exports = PocionCuracion;