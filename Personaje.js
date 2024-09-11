const Pocion = require("./Pocion");
const PocionCuracion = require("./PocionCuracion");
const PocionDanio = require("./PocionDanio");
const PocionVacia = require("./PocionVacia");

const VIDA_MAX = 300;
const VIDA_DEF = 90;

class Personaje{
    #vida=VIDA_DEF;
    #pocion="def pocion";


    /**
     * Inicializa el Personaje
     * @param {Number} vida inicial del Personaje
     */
    constructor(vida=VIDA_DEF, pocion=new PocionVacia()){
        this.#vida=vida;
        this.#pocion=pocion;
    }

    usarPocion(){
        if (this.puedoUtilizar(this.#pocion)) {
            this.#pocion.serConsumidaPor(this);
            this.#pocion=new PocionVacia();
        }else{
            console.log("No puedo usar "+this.#pocion.constructor.name);
        }
    }

    /**
     * Verifica el poder usar una pocion
     * @param {Pocion} estaPocion a verificar uso
     */
    puedoUtilizar(estaPocion){
        throw new Error("Falta implementar comportamiento");
    }

    

    /**
     * Verifica si le falta vida al personaje
     * @returns verdadero si le falta vida al personaje y false caso contrario
     */
    faltaVida(){
        return this.#vida < VIDA_MAX;
    }

    /**
     * Cura la vida hasta el maximo
     * @param {Number} estosPuntosCuracion a usar
     */
    serCuradoCon(estosPuntosCuracion){
        this.#vida+=estosPuntosCuracion;
        if (this.#vida>VIDA_MAX) {
            this.#vida=VIDA_MAX;
        }
        this.mostrarCantVida();
    }

    
    /**
     * Defiende contra un danio
     * @param {Number} esteDanio a recibir
     */
    defendeteDeEste(esteDanio){
        this.#vida-=esteDanio;
        this.mostrarCantVida();
    }

    /**
     * Muestra la vida
     */
    mostrarCantVida() {
        console.log(this.constructor.name + ": ahora tengo " + this.#vida + " vida");
    }

    /**
     * Usa habilidad contra un Personaje
     * @param {Personaje} unPersonaje a ser afectado por habilidad
     */
    usarHabilidadCon(unPersonaje){
        throw new Error("Falta implementar comportamiento en "+this.constructor
            .name
        );
    }
}

module.exports = Personaje;