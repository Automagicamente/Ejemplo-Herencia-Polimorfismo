const Pocion = require("./Pocion");

class PocionDanio extends Pocion{
    #puntosDanio=30;

    /**
     * La pocion es consumida aplicando sus efectos al Personaje
     * @param {Personaje} unPersonaje que consume la pocion
     */
    serConsumidaPor(unPersonaje){
        console.log("Aumentando danio");
        unPersonaje.aumentarDanioCon(this.#puntosDanio);
    }
}

module.exports = PocionDanio;