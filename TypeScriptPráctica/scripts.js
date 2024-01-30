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
        var modal = document.getElementById("itemss");
        if (modal) {
            modal.style.display = 'none';
        }
    }
    var closeButton = document.getElementById("close");
    if (closeButton) {
        closeButton.onclick = closeModal;
    }
    function Main() {
        var nombre = document.getElementById('NombreUsuario').value;
        var jugador1 = new Jugador(nombre);
        console.log(jugador1.nombre); //NO MUESTRA EL NOMBRE
        var bienvenido = document.getElementById('mensajebienvenido');
        bienvenido.innerHTML = "<h2>Bienvenido a Reinado Medac, ".concat(jugador1.nombre);
        var consola = document.getElementById('consola');
        var comprarFuerza = document.getElementById('comprarFuerza');
        var fuerza = document.getElementById('fuerza');
        comprarFuerza.addEventListener('click', function () {
            var contador = 0;
            if (jugador1.dinero > 0 && contador < 2) {
                jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
                jugador1.dinero--;
                contador++;
                fuerza.innerHTML = 'Dinero = ' + jugador1.dinero.toString() + '<br>';
                fuerza.innerHTML += 'Fuerza = ' + jugador1.puntosAtaque.toString() + '<br>';
                fuerza.innerHTML += 'Salud = ' + jugador1.puntosSalud.toString();
            }
            else {
                consola.innerHTML += "<div style=\"color:orange\">Ya no puedes comprar m\u00E1s, solo se puede comprar fuerza 2 veces</div>";
            }
        });
        var ElDestructordeClientes = { modo: new Enemigo('ElDestructordeClientes', 100), img: "img/javi.png" };
        var ElColetas = { modo: new Enemigo('ElColetas', 80), img: "img/isaac.png" };
        var AzotadoraServer = { modo: new Enemigo('AzotadoraServer', 130), img: "img/evelyn.png" };
        var CambridgedeAlbolote = { modo: new Enemigo('CambridgedeAlbolote', 50), img: "img/ingles.png" };
        var LadySL = { modo: new Enemigo('LadySL', 120), img: "img/empresas (1).png" };
        //Array de enemigos (no tomarlo mal)
        var Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];
        function Intro() {
            var popup = document.getElementById("popup");
            var popupText = document.getElementById("popup-text");
            var texto = "Bienvenido al reino m\u00E1gico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desaf\u00EDos. En este vasto territorio de maravillas y peligros, te embarcar\u00E1s en una odisea \u00FAnica. A medida que avanzas de nivel y desaf\u00EDas a enemigos temibles, el mism\u00EDsimo mapa de Medac se transforma y revela sus secretos m\u00E1s profundos.\n        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rinc\u00F3n de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prep\u00E1rate para explorar desiertos ardientes, selvas encantadas y g\u00E9lidos picos monta\u00F1osos, mientras desentra\u00F1as la historia oculta que vincula tu destino con el de Medac.\n        A medida que te aventuras m\u00E1s profundamente en el coraz\u00F3n del reino, la magnitud de tus desaf\u00EDos crecer\u00E1. Enfr\u00E9ntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas m\u00EDsticas. Cada nivel superado es un paso m\u00E1s cerca de desentra\u00F1ar los misterios que acechan en las sombras de Medac y convertirte en el h\u00E9roe que el reino necesita.\n        \u00A1Prep\u00E1rate para una experiencia \u00FAnica, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. \u00BFEst\u00E1s listo para escribir tu leyenda en las tierras m\u00E1gicas de Medac?";
            popupText.textContent = texto;
            popup.style.display = "block";
        }
        function closePopup() {
            var popup = document.getElementById("popup");
            popup.style.display = "none";
        }
        var closeButton = document.getElementById("cerrar");
        if (closeButton) {
            closeButton.addEventListener("click", closePopup);
        }
        function Menu() {
            Intro();
            function lucharEnemigo() {
                var sacarEnemigo = Enemigos[Math.floor(Math.random() * Enemigos.length)];
                var imagenEnemigo = document.getElementById('imagenEnemigo');
                imagenEnemigo.src = sacarEnemigo.img;
                var fuerzaEnemigo = sacarEnemigo.modo.puntosAtaque;
                consola.innerHTML += "<div style=\"color:red; font-size:15px\">Te enfrentas a ".concat(sacarEnemigo.modo.nombre, ".</div>");
                consola.innerHTML += "<div style=\"font-weight:bold; font-size:15px\">Fuerza de ".concat(sacarEnemigo.modo.nombre, ": ").concat(sacarEnemigo.modo.puntosAtaque, ".</div>");
                consola.innerHTML += "<div style=\"font-weight:bold; font-size:15px\">Tu fuerza: ".concat(jugador1.puntosAtaque, ".</div>");
                if (jugador1.puntosAtaque >= fuerzaEnemigo) {
                    jugador1.dinero += sacarEnemigo.modo.soltarDinero();
                    consola.innerHTML += "<div style=\"color: green\"> El jugador ".concat(jugador1.nombre, " gana la batalla y recibe oro extra.</div>");
                }
                else {
                    var diferenciaFuerza = fuerzaEnemigo - jugador1.puntosAtaque;
                    jugador1.puntosSalud -= diferenciaFuerza;
                    consola.innerHTML += "<div style=\"color: red\"> Has perdido ".concat(diferenciaFuerza, " puntos de salud.</div>");
                    if (jugador1.puntosSalud <= 0) {
                        consola.innerHTML += 'Se acabó, buena suerte pringao JAJAJ';
                    }
                }
            }
            function comprarItems() {
                var itemsDisponibles = [
                    { nombre: "Espada", precio: 50, stats: { ataque: 10 } },
                    { nombre: "Navaja", precio: 30, stats: { ataque: 7 } },
                    { nombre: "Alpargata", precio: 15, stats: { ataque: 2 } },
                    { nombre: "Jeringuilla", precio: 25, stats: { ataque: 3, curación: 7 } },
                    { nombre: "Cursos de OpenWebbinars", precio: 100, stats: { curación: 50 } },
                    { nombre: "Poción de curación", precio: 20, stats: { curación: 15 } },
                    { nombre: "Puchero alubias", precio: 40, stats: { curación: 30 } }
                ];
                var modalContent = document.getElementById('modalContent');
                if (modalContent) {
                    modalContent.innerHTML = '';
                    for (var i = 0; i < itemsDisponibles.length; i++) {
                        var item = itemsDisponibles[i];
                        var buttonId = "btnComprarItem" + (i + 1);
                        var statsString = Object.entries(item.stats).map(function (_a) {
                            var key = _a[0], value = _a[1];
                            return "".concat(key, ": ").concat(value);
                        }).join(', ');
                        modalContent.innerHTML += "<div id='contenedor'>\n                            <h2>".concat(item.nombre, " </h2>\n                            <img src=\"img/").concat(item.nombre, ".png\" alt=\"").concat(item.nombre, "\" width=\"70px\" height=\"70px\">\n                            <h4>").concat(item.precio, " <img src=\"img/coin.png\" alt=\"coin\" width=\"20px\" height=\"20px\" style=\"margin-top: 5px\"></h4>\n                            <h4>").concat(statsString, " </h4>\n                            <button class='botoncomprar' id=\"").concat(buttonId, "\">Adquirir</button></div>");
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
                                closeModal();
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
                // suficiente dinero
                if (jugador1.dinero >= item.precio) {
                    // reducir dinero
                    jugador1.dinero -= item.precio;
                    // aplica estadísitcas de ataque
                    if (item.stats.ataque !== undefined) {
                        jugador1.puntosAtaque += item.stats.ataque;
                        consola.innerHTML += "<div style=\"color: green\">\u00A1Has comprado ".concat(item.nombre, " por ").concat(item.precio, " de oro! Aument\u00F3 tu ataque en ").concat(item.stats.ataque, ".</div>");
                    }
                    // aplica estadísitcas de curación
                    if (item.stats.curación !== undefined) {
                        jugador1.puntosSalud += item.stats.curación;
                        consola.innerHTML += "<div style=\"color: green\">\u00A1Has comprado ".concat(item.nombre, " por ").concat(item.precio, " de oro! Recuperaste ").concat(item.stats.curación, " puntos de salud.</div>");
                    }
                    //Imprime estadísticas
                    consola.innerHTML += "<div>Estad\u00EDsticas despu\u00E9s de la compra - Ataque:\", ".concat(jugador1.puntosAtaque, ", \"Salud:\", ").concat(jugador1.puntosSalud, ", \"Dinero:\", ").concat(jugador1.dinero, "</div>");
                }
                else {
                    consola.innerHTML += "<div style=\"color: red\">\"No tienes suficiente oro para comprar este \u00EDtem.</div>";
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
                        consola.innerHTML += "<div style=\"font-weight: bold\">Has elegido luchar contra el enemigo. \u00A1Buena suerte en la batalla!</div>";
                        lucharEnemigo();
                    });
                    btnComprar.addEventListener('click', function () {
                        consola.innerHTML += "<div style=\"font-weight: bold\">Has elegido comprar \u00EDtems. \u00A1Ve a la tienda y elige sabiamente!</div>";
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
