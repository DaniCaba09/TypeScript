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
//Función Main
function Completo() {
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
    function Main() {
        // const nombre: string = readlineSync.question('¿Cuál es tu nombre? ');
        var nombre = document.getElementById('NombreUsuario').value;
        var jugador1 = new Jugador(nombre);
        console.log(jugador1.nombre); //NO MUESTRA EL NOMBRE
        var bienvenido = document.getElementById('mensajebienvenido');
        bienvenido.innerHTML = "<h2>Bienvenido a Reinado Medac, ".concat(jugador1.nombre);
        var comprarFuerza = document.getElementById('comprarFuerza');
        var fuerza = document.getElementById('fuerza');
        comprarFuerza.addEventListener('click', function () {
            jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
            jugador1.dinero--;
            fuerza.innerHTML = 'Dinero = ' + jugador1.dinero.toString() + '<br>';
            fuerza.innerHTML += 'Fuerza = ' + jugador1.puntosAtaque.toString() + '<br>';
            fuerza.innerHTML += 'Salud = ' + jugador1.puntosSalud.toString();
        });
        var flag = true;
        var ElDestructordeClientes = { modo: new Enemigo('ElDestructordeClientes', 100), img: "img/javi.png" };
        var ElColetas = { modo: new Enemigo('ElColetas', 80), img: "img/isaac.png" };
        var AzotadoraServer = { modo: new Enemigo('AzotadoraServer', 130), img: "img/evelyn.png" };
        var CambridgedeAlbolote = { modo: new Enemigo('CambridgedeAlbolote', 50), img: "img/ingles.png" };
        var LadySL = { modo: new Enemigo('LadySL', 120), img: "img/empresas (1).png" };
        //Array de enemigos (no tomarlo mal)
        var Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];
        function Intro() {
            var texto = "INTRODUCCI\u00D3N. \n Bienvenido al reino m\u00E1gico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desaf\u00EDos. En este vasto territorio de maravillas y peligros, te embarcar\u00E1s en una odisea \u00FAnica. A medida que avanzas de nivel y desaf\u00EDas a enemigos temibles, el mism\u00EDsimo mapa de Medac se transforma y revela sus secretos m\u00E1s profundos.\n        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rinc\u00F3n de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prep\u00E1rate para explorar desiertos ardientes, selvas encantadas y g\u00E9lidos picos monta\u00F1osos, mientras desentra\u00F1as la historia oculta que vincula tu destino con el de Medac.\n        A medida que te aventuras m\u00E1s profundamente en el coraz\u00F3n del reino, la magnitud de tus desaf\u00EDos crecer\u00E1. Enfr\u00E9ntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas m\u00EDsticas. Cada nivel superado es un paso m\u00E1s cerca de desentra\u00F1ar los misterios que acechan en las sombras de Medac y convertirte en el h\u00E9roe que el reino necesita.\n        \u00A1Prep\u00E1rate para una experiencia \u00FAnica, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. \u00BFEst\u00E1s listo para escribir tu leyenda en las tierras m\u00E1gicas de Medac?";
            alert(texto);
        }
        //Intro();
        function Menu() {
            Intro();
            function lucharEnemigo() {
                var sacarEnemigo = Enemigos[Math.floor(Math.random() * Enemigos.length)];
                var imagenEnemigo = document.getElementById('imagenEnemigo');
                imagenEnemigo.src = sacarEnemigo.img;
                var fuerzaEnemigo = sacarEnemigo.modo.puntosAtaque;
                if (jugador1.puntosAtaque >= fuerzaEnemigo) {
                    jugador1.dinero += sacarEnemigo.modo.soltarDinero();
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
                console.log("Te enfrentas a ".concat(sacarEnemigo.modo.nombre, "."));
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
                        modalContent.innerHTML += "<div id='contenedor'><h2>".concat(i + 1, ". ").concat(item.nombre, " </h2><h4> Precio: ").concat(item.precio, " de oro </h4><h4> Consigues: ").concat(JSON.stringify(item.stats), "\n                            </h4><button class='botoncomprar' id=\"").concat(buttonId, "\">Adquirir</button></div>");
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
                menu.innerHTML = "<h1>Seleccione una opción:</h1><button id='btnLuchar' onclick='ocultarBatalla()'>🔪 Luchar contra el enemigo🔪</button><br><button id='btnComprar' onclick='mostraritems()'>💰Comprar ítems💰</button><br><button id='btnConsultar' onclick='mostrarstats()'>💹Consultar tus estadísticas💹</button><br><button id='btnSalir'>❌Salir del juego❌</button>"; // Add event listeners to the buttons
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
                        mostraritems();
                    });
                    btnConsultar.addEventListener('click', function () {
                        var puntosAtaque = document.getElementById('ataque');
                        var puntosSalud = document.getElementById('salud');
                        var dinero = document.getElementById('dinero');
                        puntosAtaque.innerHTML = " ".concat(jugador1.puntosAtaque);
                        puntosSalud.innerHTML = " ".concat(jugador1.puntosSalud);
                        dinero.innerHTML = " ".concat(jugador1.dinero);
                        mostrarstats();
                    });
                    btnSalir.addEventListener('click', function () {
                        alert("Gracias por jugar. ¡Hasta la próxima!");
                        var body = document.body;
                        body.style.display = 'none';
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
}
function ocultarBatalla() {
    var mostrarlucha = document.getElementById('luchar');
    var items = document.getElementById('itemss');
    var mostrarstats = document.getElementById('estadisticas');
    var body = document.body;
    mostrarlucha.style.display = 'block';
    mostrarstats.style.display = 'none';
    items.style.display = 'none';
    body.style.overflow = 'auto';
}
function mostrarstats() {
    var mostrarlucha = document.getElementById('luchar');
    var mostrarstats = document.getElementById('estadisticas');
    var items = document.getElementById('itemss');
    var body = document.body;
    mostrarlucha.style.display = 'none';
    mostrarstats.style.display = 'block';
    items.style.display = 'none';
    body.style.overflow = 'hidden';
}
function mostraritems() {
    var mostrarlucha = document.getElementById('luchar');
    var items = document.getElementById('itemss');
    var mostrarstats = document.getElementById('estadisticas');
    var body = document.body;
    mostrarlucha.style.display = 'none';
    items.style.display = 'block';
    mostrarstats.style.display = 'none';
    body.style.overflow = 'auto';
}
