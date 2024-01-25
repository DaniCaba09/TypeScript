"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this._nombre = nombre;
        this._puntosSalud = 20;
        this._puntosAtaque = 0;
        this._dinero = 2;
        this.calcularFuerzaInicial();
    }
    Object.defineProperty(Jugador.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jugador.prototype, "puntosSalud", {
        get: function () {
            return this._puntosSalud;
        },
        set: function (puntosSalud) {
            this._puntosSalud = puntosSalud;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jugador.prototype, "puntosAtaque", {
        get: function () {
            return this._puntosAtaque;
        },
        set: function (puntosAtaque) {
            this._puntosAtaque = puntosAtaque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jugador.prototype, "dinero", {
        get: function () {
            return this._dinero;
        },
        set: function (dinero) {
            this._dinero = dinero;
        },
        enumerable: false,
        configurable: true
    });
    Jugador.prototype.imprimirAtributos = function () {
        console.log("Nombre: ".concat(this._nombre));
        console.log("Puntos de Salud: ".concat(this._puntosSalud));
        console.log("Puntos de Ataque: ".concat(this._puntosAtaque));
        console.log("Dinero: ".concat(this._dinero));
    };
    Jugador.prototype.calcularFuerzaInicial = function () {
        // Generar aleatoriamente puntos de ataque iniciales (por ejemplo, entre 1 y 10)
        this._puntosAtaque = Math.floor(Math.random() * 10) + 1;
    };
    return Jugador;
}());
var Enemigo = /** @class */ (function () {
    function Enemigo(nombre, puntosAtaque, puntosSalud) {
        this._nombre = nombre;
        this._puntosAtaque = puntosAtaque;
        this.calcularFuerzaEnemigo();
        this._puntosSalud = puntosSalud; // Puntos de salud inicial
    }
    Object.defineProperty(Enemigo.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enemigo.prototype, "puntosAtaque", {
        get: function () {
            return this._puntosAtaque;
        },
        set: function (puntosAtaque) {
            this._puntosAtaque = puntosAtaque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enemigo.prototype, "puntosSalud", {
        get: function () {
            return this._puntosSalud;
        },
        set: function (puntosSalud) {
            this._puntosSalud = puntosSalud;
        },
        enumerable: false,
        configurable: true
    });
    Enemigo.prototype.calcularFuerzaEnemigo = function () {
        // Generar aleatoriamente puntos de ataque del enemigo (por ejemplo, entre 1 y 10)
        this._puntosAtaque = Math.floor(Math.random() * 10) + 1;
    };
    Enemigo.prototype.soltarDinero = function () {
        // Generar aleatoriamente la cantidad de dinero que soltará el enemigo (por ejemplo, entre 1 y 5)
        var cantidadDinero = Math.floor(Math.random() * 5) + 1;
        return cantidadDinero;
    };
    return Enemigo;
}());
//Función Main
function Main() {
    var nombre = readlineSync.question('¿Cuál es tu nombre? ');
    var jugador1 = new Jugador(nombre);
    var fuerza = readlineSync.question('Comprar fuerza. ');
    if (fuerza == 'a') {
        jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
        jugador1.dinero--;
        console.log(jugador1.dinero);
    }
    var ElDestructordeClientes = new Enemigo('ElDestructordeClientes', 1, 100);
    var ElColetas = new Enemigo('ElColetas', 3, 80);
    var AzotadoraServer = new Enemigo('AzotadoraServer', 1, 130);
    var CambridgedeAlbolote = new Enemigo('CambridgedeAlbolote', 8, 50);
    var LadySL = new Enemigo('LadySL', 5, 120);
    //Array de enemigos (no tomarlo mal)
    var Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];
    function Intro() {
        var texto = "Bienvenido al reino m\u00E1gico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desaf\u00EDos. En este vasto territorio de maravillas y peligros, te embarcar\u00E1s en una odisea \u00FAnica. A medida que avanzas de nivel y desaf\u00EDas a enemigos temibles, el mism\u00EDsimo mapa de Medac se transforma y revela sus secretos m\u00E1s profundos.\n        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rinc\u00F3n de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prep\u00E1rate para explorar desiertos ardientes, selvas encantadas y g\u00E9lidos picos monta\u00F1osos, mientras desentra\u00F1as la historia oculta que vincula tu destino con el de Medac.\n        A medida que te aventuras m\u00E1s profundamente en el coraz\u00F3n del reino, la magnitud de tus desaf\u00EDos crecer\u00E1. Enfr\u00E9ntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas m\u00EDsticas. Cada nivel superado es un paso m\u00E1s cerca de desentra\u00F1ar los misterios que acechan en las sombras de Medac y convertirte en el h\u00E9roe que el reino necesita.\n        \u00A1Prep\u00E1rate para una experiencia \u00FAnica, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. \u00BFEst\u00E1s listo para escribir tu leyenda en las tierras m\u00E1gicas de Medac?";
        console.log(texto);
    }
    //Intro();
}
Main();
