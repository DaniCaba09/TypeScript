class Jugador {
    private _nombre: string;
    private _puntosSalud: number;
    private _puntosAtaque: number;
    private _dinero: number;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._puntosSalud = 20;
        this._puntosAtaque = 0;
        this._dinero = 2;
        this.calcularFuerzaInicial();
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get puntosSalud(): number {
        return this._puntosSalud;
    }

    set puntosSalud(puntosSalud: number) {
        this._puntosSalud = puntosSalud;
    }

    get puntosAtaque(): number {
        return this._puntosAtaque;
    }

    set puntosAtaque(puntosAtaque: number) {
        this._puntosAtaque = puntosAtaque;
    }

    get dinero(): number {
        return this._dinero;
    }

    set dinero(dinero: number) {
        this._dinero = dinero;
    }

    imprimirAtributos(): void {
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Puntos de Salud: ${this._puntosSalud}`);
        console.log(`Puntos de Ataque: ${this._puntosAtaque}`);
        console.log(`Dinero: ${this._dinero}`);
    }

    calcularFuerzaInicial(): void {
        // Generar aleatoriamente puntos de ataque iniciales (por ejemplo, entre 1 y 10)
        this._puntosAtaque = Math.floor(Math.random() * 10) + 1;
    }
}
class Enemigo {
    private _nombre: string;
    private _puntosAtaque: number;
    private _puntosSalud: number;

    constructor(nombre: string, puntosSalud: number) {
        this._nombre = nombre;
        this._puntosAtaque = 0;
        this.calcularFuerzaEnemigo();
        this._puntosSalud = puntosSalud; // Puntos de salud inicial
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get puntosAtaque(): number {
        return this._puntosAtaque;
    }

    set puntosAtaque(puntosAtaque: number) {
        this._puntosAtaque = puntosAtaque;
    }

    get puntosSalud(): number {
        return this._puntosSalud;
    }

    set puntosSalud(puntosSalud: number) {
        this._puntosSalud = puntosSalud;
    }

    calcularFuerzaEnemigo(): void {
        // Generar aleatoriamente puntos de ataque del enemigo (por ejemplo, entre 1 y 10)
        this._puntosAtaque = Math.floor(Math.random() * 10) + 1;
    }

    soltarDinero(): number {
        // Generar aleatoriamente la cantidad de dinero que soltará el enemigo (por ejemplo, entre 1 y 5)
        const cantidadDinero = Math.floor(Math.random() * 150) + 1;
        return cantidadDinero;
    }
}

// Definición de tipos para representar un ítem y las estadísticas que proporciona
type Item = {
    nombre: string;
    precio: number;
    stats: {
        ataque?: number;
        curacion?: number;
    };
};

//Función Main
function Completo() {


    function openModal() {
        var modal: HTMLElement | null = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }

    function closeModal() {
        var modal: HTMLElement | null = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    function Main() {
        // const nombre: string = readlineSync.question('¿Cuál es tu nombre? ');
        const nombre: string = (<HTMLInputElement>document.getElementById('NombreUsuario')).value;
        const jugador1 = new Jugador(nombre);
        console.log(jugador1.nombre); //NO MUESTRA EL NOMBRE

        var bienvenido = document.getElementById('mensajebienvenido');
        bienvenido!.innerHTML = `<h2>Bienvenido a Reinado Medac, ${jugador1.nombre}`;


        const comprarFuerza = document.getElementById('comprarFuerza') as HTMLElement;
        const fuerza = document.getElementById('fuerza') as HTMLElement;

        comprarFuerza.addEventListener('click', function() {
            jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
            jugador1.dinero--;
            fuerza.innerHTML = 'Dinero = ' + jugador1.dinero.toString() + '<br>';
            fuerza.innerHTML += 'Fuerza = ' + jugador1.puntosAtaque.toString()+ '<br>';
            fuerza.innerHTML += 'Salud = ' + jugador1.puntosSalud.toString();
        })
        

        var flag: boolean = true;

        const ElDestructordeClientes = { modo: new Enemigo('ElDestructordeClientes', 100), img: "img/javi.png" };
        const ElColetas = { modo: new Enemigo('ElColetas', 80), img: "img/isaac.png" };
        const AzotadoraServer = { modo: new Enemigo('AzotadoraServer', 130), img: "img/evelyn.png" };
        const CambridgedeAlbolote = { modo: new Enemigo('CambridgedeAlbolote', 50), img: "img/ingles.png" };
        const LadySL = { modo: new Enemigo('LadySL', 120), img: "img/empresas (1).png" };

        //Array de enemigos (no tomarlo mal)
        const Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];


        function Intro() {
            const texto: string = `INTRODUCCIÓN. \n Bienvenido al reino mágico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desafíos. En este vasto territorio de maravillas y peligros, te embarcarás en una odisea única. A medida que avanzas de nivel y desafías a enemigos temibles, el mismísimo mapa de Medac se transforma y revela sus secretos más profundos.
        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rincón de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prepárate para explorar desiertos ardientes, selvas encantadas y gélidos picos montañosos, mientras desentrañas la historia oculta que vincula tu destino con el de Medac.
        A medida que te aventuras más profundamente en el corazón del reino, la magnitud de tus desafíos crecerá. Enfréntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas místicas. Cada nivel superado es un paso más cerca de desentrañar los misterios que acechan en las sombras de Medac y convertirte en el héroe que el reino necesita.
        ¡Prepárate para una experiencia única, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. ¿Estás listo para escribir tu leyenda en las tierras mágicas de Medac?`;

            alert(texto);
        }
        //Intro();
        function Menu() {

            Intro();
            function lucharEnemigo() {

                const sacarEnemigo = Enemigos[Math.floor(Math.random() * Enemigos.length)];

                const imagenEnemigo = document.getElementById('imagenEnemigo') as HTMLImageElement;
                imagenEnemigo.src = sacarEnemigo.img;

                const fuerzaEnemigo = sacarEnemigo.modo.puntosAtaque;

                if (jugador1.puntosAtaque >= fuerzaEnemigo) {
                    jugador1.dinero += sacarEnemigo.modo.soltarDinero();
                    console.log(`El jugador ${jugador1.nombre} gana la batalla y recibe oro extra.`);
                } else {
                    var diferenciaFuerza = fuerzaEnemigo - jugador1.puntosAtaque;
                    jugador1.puntosSalud -= diferenciaFuerza;
                    console.log(`Has perdido ${diferenciaFuerza} puntos de salud.`)
                    if (jugador1.puntosSalud <= 0) {
                        console.log('Se acabó, buena suerte pringao JAJAJ')
                        flag = false;
                    }
                }

                console.log(`Te enfrentas a ${sacarEnemigo.modo.nombre}.`);
            }
            function comprarItems() {
                const itemsDisponibles: Item[] = [
                    { nombre: "Espada", precio: 50, stats: { ataque: 10 } },
                    { nombre: "Navaja", precio: 30, stats: { ataque: 7 } },
                    { nombre: "Alpargata", precio: 15, stats: { ataque: 2 } },
                    { nombre: "Jeringuilla", precio: 25, stats: { ataque: 3, curacion: 7 } },
                    { nombre: "Cursos de OpenWebbinars", precio: 100, stats: { curacion: 50 } },
                    { nombre: "Poción de curación", precio: 20, stats: { curacion: 15 } },
                    { nombre: "Puchero alubias", precio: 40, stats: { curacion: 30 } }
                ];

                let modalContent = document.getElementById('modalContent');

                if (modalContent) {
                    modalContent.innerHTML = '';

                    for (let i = 0; i < itemsDisponibles.length; i++) {
                        let item = itemsDisponibles[i];
                        let buttonId = "btnComprarItem" + (i + 1);
                        modalContent.innerHTML += `<div id='contenedor'><h2>${i + 1}. ${item.nombre} </h2><h4> Precio: ${item.precio} de oro </h4><h4> Consigues: ${JSON.stringify(item.stats)}
                            </h4><button class='botoncomprar' id="${buttonId}">Adquirir</button></div>`;
                    }

                    for (let i = 0; i < itemsDisponibles.length; i++) {
                        let item = itemsDisponibles[i];
                        let buttonId = "btnComprarItem" + (i + 1);
                        let btnComprarItem = document.getElementById(buttonId);

                        if (btnComprarItem) {
                            btnComprarItem.addEventListener('click', function () {
                                console.log(`Button ${buttonId} clicked`);
                                console.log(item);
                                // Call a function to handle the purchase
                                handleCompra(item);
                            });
                        } else {
                            console.error("Button " + buttonId + " not found");
                        }
                    }

                    // Open the modal
                    openModal();
                } else {
                    console.error("Element with ID 'modalContent' not found");
                }
            }
            function handleCompra(item: Item) {
                console.log('Handling purchase for item:', item.nombre);
                // Verify if the player has enough money to buy the item
                if (jugador1.dinero >= item.precio) {
                    // Deduct the price of the item from the player's money
                    jugador1.dinero -= item.precio;
                    // Check if the item provides attack stats and apply them
                    if (item.stats.ataque !== undefined) {
                        jugador1.puntosAtaque += item.stats.ataque;
                        console.log(`¡Has comprado ${item.nombre} por ${item.precio} de oro! Aumentó tu ataque en ${item.stats.ataque}.`);
                    }
                    // Check if the item provides healing stats and apply them
                    if (item.stats.curacion !== undefined) {
                        jugador1.puntosSalud += item.stats.curacion;
                        console.log(`¡Has comprado ${item.nombre} por ${item.precio} de oro! Recuperaste ${item.stats.curacion} puntos de salud.`);
                    }
                    // Print current player stats
                    console.log("Player stats after purchase - Ataque:", jugador1.puntosAtaque, "Salud:", jugador1.puntosSalud, "Dinero:", jugador1.dinero);
                } else {
                    console.log("No tienes suficiente oro para comprar este ítem.");
                }
            }


            var menu: HTMLElement = document.getElementById('menu')!;

            if (menu) {
                menu.innerHTML = "<h1>Seleccione una opción:</h1><button id='btnLuchar' onclick='ocultarBatalla()'>🔪 Luchar contra el enemigo🔪</button><br><button id='btnComprar' onclick='mostraritems()'>💰Comprar ítems💰</button><br><button id='btnConsultar' onclick='mostrarstats()'>💹Consultar tus estadísticas💹</button><br><button id='btnSalir'>❌Salir del juego❌</button>";                // Add event listeners to the buttons

                var btnLuchar: HTMLButtonElement | null = document.getElementById('btnLuchar') as HTMLButtonElement;
                var btnComprar: HTMLButtonElement | null = document.getElementById('btnComprar') as HTMLButtonElement;
                var btnConsultar: HTMLButtonElement | null = document.getElementById('btnConsultar') as HTMLButtonElement;
                var btnSalir: HTMLButtonElement | null = document.getElementById('btnSalir') as HTMLButtonElement;

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

                        puntosAtaque!.innerHTML = ` ${jugador1.puntosAtaque}`;
                        puntosSalud!.innerHTML = ` ${jugador1.puntosSalud}`;
                        dinero!.innerHTML = ` ${jugador1.dinero}`;

                        mostrarstats();
                    });

                    btnSalir.addEventListener('click', function () {
                        alert("Gracias por jugar. ¡Hasta la próxima!");
                        var body = document.body;

                        body.style.display = 'none';
                    });
                }
            } else {
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

    mostrarlucha!.style.display = 'block';
    mostrarstats!.style.display = 'none';
    items!.style.display = 'none';
    body.style.overflow = 'auto';
}
function mostrarstats() {
    var mostrarlucha = document.getElementById('luchar');
    var mostrarstats = document.getElementById('estadisticas');
    var items = document.getElementById('itemss');
    var body = document.body;

    mostrarlucha!.style.display = 'none';
    mostrarstats!.style.display = 'block';
    items!.style.display = 'none';
    body.style.overflow = 'hidden';
}

function mostraritems() {
    var mostrarlucha = document.getElementById('luchar');
    var items = document.getElementById('itemss');
    var mostrarstats = document.getElementById('estadisticas');
    var body = document.body;

    mostrarlucha!.style.display = 'none';
    items!.style.display = 'block';
    mostrarstats!.style.display = 'none';
    body.style.overflow = 'auto';

}
