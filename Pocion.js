const Personaje = require("./Personaje");

class Pocion{
    /**
     * La pocion es consumida aplicando sus efectos al Personaje
     * @param {Personaje} unPersonaje que consume la pocion
     */
    serConsumidaPor(unPersonaje){
        throw new Error("Falta implementar comportamiento");
    }
}

module.exports = Pocion;