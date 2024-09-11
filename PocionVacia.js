const Pocion = require("./Pocion");

class PocionVacia extends Pocion{
    
    serConsumidaPor(unPersonaje){
        console.log("Sin efecto");
        
    }
}

module.exports = PocionVacia;