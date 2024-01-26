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
    function Enemigo(nombre, puntosSalud) {
        this._nombre = nombre;
        this._puntosAtaque = 0;
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
        var cantidadDinero = Math.floor(Math.random() * 150) + 1;
        return cantidadDinero;
    };
    return Enemigo;
}());
document.addEventListener('DOMContentLoaded', function () {
    function openModal() {
        var modal = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }
    function closeModal() {
        var modal = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    //Función Main
    function Main() {
        // const nombre: string = readlineSync.question('¿Cuál es tu nombre? ');
        var nombre = 'pepe';
        var jugador1 = new Jugador(nombre);
        var flag = true;
        //const fuerza: string = readlineSync.question('Comprar fuerza. ');
        var fuerza = 'a';
        if (fuerza == 'a') {
            jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
            jugador1.dinero--;
            console.log(jugador1.dinero);
            console.log(jugador1.puntosAtaque);
            console.log(jugador1.puntosSalud);
        }
        var ElDestructordeClientes = new Enemigo('ElDestructordeClientes', 100);
        var ElColetas = new Enemigo('ElColetas', 80);
        var AzotadoraServer = new Enemigo('AzotadoraServer', 130);
        var CambridgedeAlbolote = new Enemigo('CambridgedeAlbolote', 50);
        var LadySL = new Enemigo('LadySL', 120);
        //Array de enemigos (no tomarlo mal)
        var Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];
        function Intro() {
            var texto = "Bienvenido al reino m\u00E1gico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desaf\u00EDos. En este vasto territorio de maravillas y peligros, te embarcar\u00E1s en una odisea \u00FAnica. A medida que avanzas de nivel y desaf\u00EDas a enemigos temibles, el mism\u00EDsimo mapa de Medac se transforma y revela sus secretos m\u00E1s profundos.\n        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rinc\u00F3n de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prep\u00E1rate para explorar desiertos ardientes, selvas encantadas y g\u00E9lidos picos monta\u00F1osos, mientras desentra\u00F1as la historia oculta que vincula tu destino con el de Medac.\n        A medida que te aventuras m\u00E1s profundamente en el coraz\u00F3n del reino, la magnitud de tus desaf\u00EDos crecer\u00E1. Enfr\u00E9ntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas m\u00EDsticas. Cada nivel superado es un paso m\u00E1s cerca de desentra\u00F1ar los misterios que acechan en las sombras de Medac y convertirte en el h\u00E9roe que el reino necesita.\n        \u00A1Prep\u00E1rate para una experiencia \u00FAnica, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. \u00BFEst\u00E1s listo para escribir tu leyenda en las tierras m\u00E1gicas de Medac?";
            console.log(texto);
        }
        //Intro();
        function Menu() {
            function lucharEnemigo() {
                var sacarEnemigo = Enemigos[Math.floor(Math.random() * Enemigos.length)];
                var fuerzaEnemigo = sacarEnemigo.puntosAtaque;
                if (jugador1.puntosAtaque >= fuerzaEnemigo) {
                    jugador1.dinero += sacarEnemigo.soltarDinero();
                    console.log("El jugador ".concat(jugador1.nombre, " gana la batalla y recibe oro extra."));
                }
                else {
                    var diferenciaFuerza = fuerzaEnemigo - jugador1.puntosAtaque;
                    jugador1.puntosSalud -= diferenciaFuerza;
                    console.log("Has perdido ".concat(diferenciaFuerza, " puntos de salud."));
                    if (jugador1.puntosSalud <= 0) {
                        console.log('Se acabó, buena suerte pringao JAJAJ');
                        flag = false;
                    }
                }
                console.log("Te enfrentas a ".concat(sacarEnemigo.nombre, "."));
            }
            function comprarItems() {
                var itemsDisponibles = [
                    { nombre: "Espada", precio: 50, stats: { ataque: 10 } },
                    { nombre: "Navaja", precio: 30, stats: { ataque: 7 } },
                    { nombre: "Alpargata", precio: 15, stats: { ataque: 2 } },
                    { nombre: "Jeringuilla", precio: 25, stats: { ataque: 3, curacion: 7 } },
                    { nombre: "Cursos de OpenWebbinars", precio: 100, stats: { curacion: 50 } },
                    { nombre: "Poción de curación", precio: 20, stats: { curacion: 15 } },
                    { nombre: "Puchero alubias", precio: 40, stats: { curacion: 30 } }
                ];
                var modalContent = document.getElementById('modalContent');
                if (modalContent) {
                    modalContent.innerHTML = '';
                    for (var i = 0; i < itemsDisponibles.length; i++) {
                        var item = itemsDisponibles[i];
                        var buttonId = "btnComprarItem" + (i + 1);
                        modalContent.innerHTML += "<p>".concat(i + 1, ". ").concat(item.nombre, " - ").concat(item.precio, " de oro - ").concat(JSON.stringify(item.stats), "\n                            <button id=\"").concat(buttonId, "\">Comprar</button></p>");
                    }
                    var _loop_1 = function (i) {
                        var item = itemsDisponibles[i];
                        var buttonId = "btnComprarItem" + (i + 1);
                        var btnComprarItem = document.getElementById(buttonId);
                        if (btnComprarItem) {
                            btnComprarItem.addEventListener('click', function () {
                                console.log("Button ".concat(buttonId, " clicked"));
                                console.log(item);
                                // Call a function to handle the purchase
                                handleCompra(item);
                            });
                        }
                        else {
                            console.error("Button " + buttonId + " not found");
                        }
                    };
                    for (var i = 0; i < itemsDisponibles.length; i++) {
                        _loop_1(i);
                    }
                    // Open the modal
                    openModal();
                }
                else {
                    console.error("Element with ID 'modalContent' not found");
                }
            }
            function handleCompra(item) {
                console.log('Handling purchase for item:', item.nombre);
                // Verify if the player has enough money to buy the item
                if (jugador1.dinero >= item.precio) {
                    // Deduct the price of the item from the player's money
                    jugador1.dinero -= item.precio;
                    // Check if the item provides attack stats and apply them
                    if (item.stats.ataque !== undefined) {
                        jugador1.puntosAtaque += item.stats.ataque;
                        console.log("\u00A1Has comprado ".concat(item.nombre, " por ").concat(item.precio, " de oro! Aument\u00F3 tu ataque en ").concat(item.stats.ataque, "."));
                    }
                    // Check if the item provides healing stats and apply them
                    if (item.stats.curacion !== undefined) {
                        jugador1.puntosSalud += item.stats.curacion;
                        console.log("\u00A1Has comprado ".concat(item.nombre, " por ").concat(item.precio, " de oro! Recuperaste ").concat(item.stats.curacion, " puntos de salud."));
                    }
                    // Print current player stats
                    console.log("Player stats after purchase - Ataque:", jugador1.puntosAtaque, "Salud:", jugador1.puntosSalud, "Dinero:", jugador1.dinero);
                }
                else {
                    console.log("No tienes suficiente oro para comprar este ítem.");
                }
            }
            var menu = document.getElementById('menu');
            if (menu) {
                menu.innerHTML = "<h1>Seleccione una opción:</h1><button id='btnLuchar'  onclick='ocultarBatalla()'>🔪 Luchar contra el enemigo🔪</button><br><button id='btnComprar'>2. Comprar ítems</button><br><button id='btnConsultar'>3. Consultar tus estadísticas</button><br><button id='btnSalir'>4. Salir del juego</button>"; // Add event listeners to the buttons
                var btnLuchar = document.getElementById('btnLuchar');
                var btnComprar = document.getElementById('btnComprar');
                var btnConsultar = document.getElementById('btnConsultar');
                var btnSalir = document.getElementById('btnSalir');
                if (btnLuchar && btnComprar && btnConsultar && btnSalir) {
                    btnLuchar.addEventListener('click', function () {
                        console.log("Has elegido luchar contra el enemigo. ¡Buena suerte en la batalla!");
                        lucharEnemigo();
                    });
                    btnComprar.addEventListener('click', function () {
                        console.log("Has elegido comprar ítems. ¡Ve a la tienda y elige sabiamente!");
                        comprarItems();
                    });
                    btnConsultar.addEventListener('click', function () {
                        console.log("Has elegido consultar tus estadísticas. Mira tu progreso hasta ahora.");
                        console.log("Ataque: " + jugador1.puntosAtaque + "  -  Salud: " + jugador1.puntosSalud + "  -  Dinero: " + jugador1.dinero);
                    });
                    btnSalir.addEventListener('click', function () {
                        console.log("Gracias por jugar. ¡Hasta la próxima!");
                        // Include any necessary cleanup or exit logic here
                    });
                }
            }
            else {
                console.error("El elemento con ID 'menu' no fue encontrado.");
            }
        }
        Menu();
    }
    Main();
});
function ocultarBatalla() {
    var mostrar = document.getElementById('luchar');
    mostrar.style.display = 'block';
}
