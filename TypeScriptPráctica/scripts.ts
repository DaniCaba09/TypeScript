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

    constructor(nombre: string) {
        this._nombre = nombre;
        this._puntosAtaque = 0;
        this.calcularFuerzaEnemigo();
        this._puntosSalud = 10; // Puntos de salud inicial
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

// Ejemplo de uso
const enemigo1 = new Enemigo("Enemigo1");
console.log(`Nombre del enemigo: ${enemigo1.nombre}`);
console.log(`Puntos de Salud del enemigo: ${enemigo1.puntosSalud}`);
console.log(`Puntos de Ataque del enemigo: ${enemigo1.puntosAtaque}`);
console.log(`Dinero que soltará el enemigo: ${enemigo1.soltarDinero()}`);

// Ejemplo de uso
const jugador1 = new Jugador("Jugador1");
jugador1.imprimirAtributos();

//Función Main

function Main( ) {

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
    Intro();
}

Main();