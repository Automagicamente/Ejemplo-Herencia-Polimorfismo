const Curador = require("./Curador");
const Guerrero = require("./Guerrero");
const PocionCuracion = require("./PocionCuracion");
const PocionDanio = require("./PocionDanio");
const PocionVacia = require("./PocionVacia");


const unCurador = new Curador(100, new PocionDanio());
const unGuerrero = new Guerrero(200, new PocionCuracion());

unGuerrero.usarPocion();
unGuerrero.usarPocion();