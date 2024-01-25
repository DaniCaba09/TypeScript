import * as readlineSync from 'readline-sync';
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

    constructor(nombre: string, puntosAtaque: number, puntosSalud: number) {
        this._nombre = nombre;
        this._puntosAtaque = puntosAtaque;
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
        const cantidadDinero = Math.floor(Math.random() * 5) + 1;
        return cantidadDinero;
    }
}





//Función Main

function Main( ) {
    const nombre: string = readlineSync.question('¿Cuál es tu nombre? ');
    const jugador1: Jugador = new Jugador(nombre);
    var flag: boolean = true;

    const fuerza: string = readlineSync.question('Comprar fuerza. ');
    if (fuerza == 'a') {
        jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
        jugador1.dinero--;
        console.log(jugador1.dinero);
        console.log(jugador1.puntosAtaque);

    }

    const ElDestructordeClientes = new Enemigo ('ElDestructordeClientes',1,100);
    const ElColetas = new Enemigo ('ElColetas',3,80);
    const AzotadoraServer = new Enemigo ('AzotadoraServer', 1, 130);
    const CambridgedeAlbolote = new Enemigo ('CambridgedeAlbolote',8, 50);
    const LadySL = new Enemigo ('LadySL',5, 120);

    //Array de enemigos (no tomarlo mal)
    const Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];
    function Intro(){
        const texto: string = `Bienvenido al reino mágico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desafíos. En este vasto territorio de maravillas y peligros, te embarcarás en una odisea única. A medida que avanzas de nivel y desafías a enemigos temibles, el mismísimo mapa de Medac se transforma y revela sus secretos más profundos.
        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rincón de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prepárate para explorar desiertos ardientes, selvas encantadas y gélidos picos montañosos, mientras desentrañas la historia oculta que vincula tu destino con el de Medac.
        A medida que te aventuras más profundamente en el corazón del reino, la magnitud de tus desafíos crecerá. Enfréntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas místicas. Cada nivel superado es un paso más cerca de desentrañar los misterios que acechan en las sombras de Medac y convertirte en el héroe que el reino necesita.
        ¡Prepárate para una experiencia única, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. ¿Estás listo para escribir tu leyenda en las tierras mágicas de Medac?`;
        
        console.log(texto);
    }
    //Intro();
    function Menu() {

        function comprarItems() {
            
        }
        console.log("\nSeleccione una opción:");
        console.log("1. Luchar contra el enemigo");
        console.log("2. Comprar ítems");
        console.log("3. Consultar tus estadísticas");
        console.log("4. Salir del juego");

        const opcion: number = readlineSync.question("Ingrese el número de la opción deseada: ");

        switch (opcion) {
            case 1:
                console.log("Has elegido luchar contra el enemigo. ¡Buena suerte en la batalla!");
                // Aquí puedes colocar la lógica correspondiente para la opción 1.
                break;
            case 2:
                console.log("Has elegido comprar ítems. ¡Ve a la tienda y elige sabiamente!");
                // Lógica para la opción 2.
                break;
            case 3:
                console.log("Has elegido consultar tus estadísticas. Mira tu progreso hasta ahora.");
                // Lógica para la opción 3.
                break;
            case 4:
                console.log("Gracias por jugar. ¡Hasta la próxima!");
                return; // Sale del bucle y finaliza la función.
            default:
                console.log("Opción no válida. Por favor, ingrese un número válido.");
                break;
        }
    }
    while (flag) {
        
    }
}

Main();
