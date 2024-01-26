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

function Main() {
    // const nombre: string = readlineSync.question('¿Cuál es tu nombre? ');
    const nombre: string = 'pepe';
    const jugador1: Jugador = new Jugador(nombre);
    var flag: boolean = true;

    //const fuerza: string = readlineSync.question('Comprar fuerza. ');
    const fuerza: string = 'a';
    if (fuerza == 'a') {
        jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
        jugador1.dinero--;
        console.log(jugador1.dinero);
        console.log(jugador1.puntosAtaque);
        console.log(jugador1.puntosSalud);


    }

    const ElDestructordeClientes = new Enemigo('ElDestructordeClientes', 100);
    const ElColetas = new Enemigo('ElColetas', 80);
    const AzotadoraServer = new Enemigo('AzotadoraServer', 130);
    const CambridgedeAlbolote = new Enemigo('CambridgedeAlbolote', 50);
    const LadySL = new Enemigo('LadySL', 120);

    //Array de enemigos (no tomarlo mal)
    const Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];
    function Intro() {
        const texto: string = `Bienvenido al reino mágico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desafíos. En este vasto territorio de maravillas y peligros, te embarcarás en una odisea única. A medida que avanzas de nivel y desafías a enemigos temibles, el mismísimo mapa de Medac se transforma y revela sus secretos más profundos.
        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rincón de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prepárate para explorar desiertos ardientes, selvas encantadas y gélidos picos montañosos, mientras desentrañas la historia oculta que vincula tu destino con el de Medac.
        A medida que te aventuras más profundamente en el corazón del reino, la magnitud de tus desafíos crecerá. Enfréntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas místicas. Cada nivel superado es un paso más cerca de desentrañar los misterios que acechan en las sombras de Medac y convertirte en el héroe que el reino necesita.
        ¡Prepárate para una experiencia única, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. ¿Estás listo para escribir tu leyenda en las tierras mágicas de Medac?`;

        console.log(texto);
    }
    //Intro();
    function Menu() {
        function lucharEnemigo() {

            const sacarEnemigo = Enemigos[Math.floor(Math.random() * Enemigos.length)];
            const fuerzaEnemigo = sacarEnemigo.puntosAtaque;

            if (jugador1.puntosAtaque >= fuerzaEnemigo) {
                jugador1.dinero += sacarEnemigo.soltarDinero();
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

            console.log(`Te enfrentas a ${sacarEnemigo.nombre}.`);
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

            // Mostrar las opciones de compra
            for (let i = 0; i < itemsDisponibles.length; i++) {
                const item = itemsDisponibles[i];
                console.log(`${i + 1}. ${item.nombre} - ${item.precio} de oro - ${item.stats}`);
            }
            //const opcionElegida: number = readlineSync.questionInt("Ingrese el número del ítem que desea comprar: ");
            const opcionElegida: number = 2;
            // Verificar si la opción elegida es válida
            if (opcionElegida < 1 || opcionElegida > itemsDisponibles.length) {
                console.log("Opción no válida. Por favor, ingrese un número de opción válido.");
                return;
            }
            const itemSeleccionado: Item = itemsDisponibles[opcionElegida - 1];
            if (jugador1.dinero >= itemSeleccionado.precio) {
                jugador1.dinero -= itemSeleccionado.precio;
                if (itemSeleccionado.stats.ataque !== undefined) {
                    // Solo ejecuta esta línea si 'ataque' no es 'undefined'
                    jugador1.puntosAtaque += itemSeleccionado.stats.ataque;
                } else {
                    console.log("El ítem seleccionado no proporciona puntos de ataque.");
                }
                if (itemSeleccionado.stats.curacion !== undefined) {
                    // Solo ejecuta esta línea si 'ataque' no es 'undefined'
                    jugador1.puntosSalud += itemSeleccionado.stats.curacion;
                } else {
                    console.log("El ítem seleccionado no cura.");
                }
            }
        }
        document.addEventListener('DOMContentLoaded', function() {
            var menu: HTMLElement = document.getElementById('menu')!;
        
            if (menu) {
                menu.innerHTML = "<h1>Seleccione una opción:</h1><button>1. Luchar contra el enemigo</button><br><button>2. Comprar ítems</button><br><button>3. Consultar tus estadísticas</button><br><button>4. Salir del juego</button>";
            } else {
                console.error("El elemento con ID 'menu' no fue encontrado.");
            }
        });
        

        //const opcion: number = readlineSync.questionInt("Ingrese el número de la opción deseada: ");
        const opcion: number = 1;
        console.log(`Opción ingresada: ${opcion}`);

        switch (opcion) {
            case 1:
                console.log("Has elegido luchar contra el enemigo. ¡Buena suerte en la batalla!");
                lucharEnemigo();
                break;
            case 2:
                console.log("Has elegido comprar ítems. ¡Ve a la tienda y elige sabiamente!");
                comprarItems();
                break;
            case 3:
                console.log("Has elegido consultar tus estadísticas. Mira tu progreso hasta ahora.");
                console.log("Ataque: " + jugador1.puntosAtaque + "  -  Salud: " + jugador1.puntosSalud + "  -  Dinero: " + jugador1.dinero);
                break;
            case 4:
                console.log("Gracias por jugar. ¡Hasta la próxima!");
                flag = false;
                return; // Sale del bucle y finaliza la función.
            default:
                console.log("Opción no válida. Por favor, ingrese un número válido.");
                break;
        }
    }
    while (flag) {
        Menu();
    }

}

Main();
