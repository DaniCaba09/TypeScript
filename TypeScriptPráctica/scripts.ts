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
        curación?: number;
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
        const modal = document.getElementById("itemss");
        if (modal) {
            modal.style.display = 'none';
        }
    }


    const closeButton = document.getElementById("close");

    if (closeButton) {
        closeButton.onclick = closeModal;
    }

    function Main() {
        const nombre: string = (<HTMLInputElement>document.getElementById('NombreUsuario')).value;
        const jugador1 = new Jugador(nombre);
        console.log(jugador1.nombre); //NO MUESTRA EL NOMBRE

        var bienvenido = document.getElementById('mensajebienvenido');
        bienvenido!.innerHTML = `<h2>Bienvenido a Reinado Medac, ${jugador1.nombre}`;

        var consola = document.getElementById('consola') as HTMLElement;
        let contador:number = 0;


        const comprarFuerza = document.getElementById('comprarFuerza') as HTMLElement;
        const fuerza = document.getElementById('fuerza') as HTMLElement;

        comprarFuerza.addEventListener('click', function() {
            if (jugador1.dinero > 0 && contador < 2) {
                jugador1.puntosAtaque = Math.floor(Math.random() * 10) + 1;
                jugador1.dinero--;
                contador++;
                console.log(contador);
                fuerza.innerHTML = 'Dinero = ' + jugador1.dinero.toString() + '<br>';
                fuerza.innerHTML += 'Fuerza = ' + jugador1.puntosAtaque.toString()+ '<br>';
                fuerza.innerHTML += 'Salud = ' + jugador1.puntosSalud.toString();     
            }else{
                consola.innerHTML += `<div style="color:orange">Ya no puedes comprar más, solo se puede comprar fuerza 2 veces</div>`;
            }

        })
        

        const ElDestructordeClientes = { modo: new Enemigo('ElDestructordeClientes', 100), img: "img/javi.png" };
        const ElColetas = { modo: new Enemigo('ElColetas', 80), img: "img/isaac.png" };
        const AzotadoraServer = { modo: new Enemigo('AzotadoraServer', 130), img: "img/evelyn.png" };
        const CambridgedeAlbolote = { modo: new Enemigo('CambridgedeAlbolote', 50), img: "img/ingles.png" };
        const LadySL = { modo: new Enemigo('LadySL', 120), img: "img/empresas (1).png" };

        //Array de enemigos (no tomarlo mal)
        const Enemigos = [ElDestructordeClientes, ElColetas, AzotadoraServer, CambridgedeAlbolote, LadySL];


        function Intro() {
            const popup = document.getElementById("popup")!;
            const popupText = document.getElementById("popup-text")!;
            const texto: string = `Bienvenido al reino mágico de Medac, donde la aventura aguarda a aquellos lo suficientemente valientes para enfrentarse a sus desafíos. En este vasto territorio de maravillas y peligros, te embarcarás en una odisea única. A medida que avanzas de nivel y desafías a enemigos temibles, el mismísimo mapa de Medac se transforma y revela sus secretos más profundos.
        Desde los bosques ancestrales hasta las deslumbrantes ciudades flotantes, cada rincón de Medac es testigo de tu progreso. Cada victoria sobre los enemigos reales que amenazan la paz del reino desbloquea nuevas regiones y descubre pasadizos secretos. Prepárate para explorar desiertos ardientes, selvas encantadas y gélidos picos montañosos, mientras desentrañas la historia oculta que vincula tu destino con el de Medac.
        A medida que te aventuras más profundamente en el corazón del reino, la magnitud de tus desafíos crecerá. Enfréntate a enemigos legendarios, descubre artefactos antiguos y forja alianzas con criaturas místicas. Cada nivel superado es un paso más cerca de desentrañar los misterios que acechan en las sombras de Medac y convertirte en el héroe que el reino necesita.
        ¡Prepárate para una experiencia única, donde cada paso que tomes cambia el destino de Medac y determina tu lugar en la historia! La epopeya te espera, aventurero. ¿Estás listo para escribir tu leyenda en las tierras mágicas de Medac?`;

            popupText.textContent = texto;
            popup.style.display = "block";
        }

        function closePopup() {
            const popup = document.getElementById("popup")!;
            popup.style.display = "none";
        }
        const closeButton = document.getElementById("cerrar");

        if (closeButton) {
            closeButton.addEventListener("click", closePopup);
        }
        function Menu() {

            Intro();
            function lucharEnemigo() {

                const sacarEnemigo = Enemigos[Math.floor(Math.random() * Enemigos.length)];

                const imagenEnemigo = document.getElementById('imagenEnemigo') as HTMLImageElement;
                imagenEnemigo.src = sacarEnemigo.img;

                const fuerzaEnemigo = sacarEnemigo.modo.puntosAtaque;

                consola!.innerHTML +=`<div style="color:red; font-size:15px">Te enfrentas a ${sacarEnemigo.modo.nombre}.</div>`;
                consola!.innerHTML +=`<div style="font-weight:bold; font-size:15px">Fuerza de ${sacarEnemigo.modo.nombre}: ${sacarEnemigo.modo.puntosAtaque}.</div>`;
                consola!.innerHTML +=`<div style="font-weight:bold; font-size:15px">Tu fuerza: ${jugador1.puntosAtaque}.</div>`;



                if (jugador1.puntosAtaque >= fuerzaEnemigo) {
                    let soltado = sacarEnemigo.modo.soltarDinero();
                    jugador1.dinero += soltado;
                    consola.innerHTML += `<div style="color: green"> El jugador ${jugador1.nombre} gana la batalla y recibe ${soltado} de oro extra.</div>`;
                } else {
                    var diferenciaFuerza = fuerzaEnemigo - jugador1.puntosAtaque;
                    jugador1.puntosSalud -= diferenciaFuerza;
                    consola.innerHTML +=`<div style="color: red"> Has perdido ${diferenciaFuerza} puntos de salud.</div>`;
                    if (jugador1.puntosSalud <= 0) {
                        consola.innerHTML +='Se acabó, buena suerte pringao JAJAJ';
                    }
                }

            }
            function comprarItems() {
                const itemsDisponibles: Item[] = [
                    { nombre: "Espada", precio: 50, stats: { ataque: 10 } },
                    { nombre: "Navaja", precio: 30, stats: { ataque: 7 } },
                    { nombre: "Alpargata", precio: 15, stats: { ataque: 2 } },
                    { nombre: "Jeringuilla", precio: 25, stats: { ataque: 3, curación: 7 } },
                    { nombre: "Cursos de OpenWebbinars", precio: 100, stats: { curación: 50 } },
                    { nombre: "Poción de curación", precio: 20, stats: { curación: 15 } },
                    { nombre: "Puchero alubias", precio: 40, stats: { curación: 30 } }
                ];

                let modalContent = document.getElementById('modalContent');

                if (modalContent) {
                    modalContent.innerHTML = '';

                    for (let i = 0; i < itemsDisponibles.length; i++) {
                        let item = itemsDisponibles[i];
                        let buttonId = "btnComprarItem" + (i + 1);
                        let statsString = Object.entries(item.stats).map(([key, value]) => `${key}: ${value}`).join(', ');

                        modalContent.innerHTML += `<div id='contenedor'>
                            <h2>${item.nombre} </h2>
                            <img src="img/${item.nombre}.png" alt="${item.nombre}" width="70px" height="70px">
                            <h4>${item.precio} <img src="img/coin.png" alt="coin" width="20px" height="20px" style="margin-top: 5px"></h4>
                            <h4>${statsString} </h4>
                            <button class='botoncomprar' id="${buttonId}">Adquirir</button></div>`;
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
                                closeModal();
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
                // suficiente dinero
                if (jugador1.dinero >= item.precio) {
                    // reducir dinero
                    jugador1.dinero -= item.precio;
                    // aplica estadísitcas de ataque
                    if (item.stats.ataque !== undefined) {
                        jugador1.puntosAtaque += item.stats.ataque;
                        consola.innerHTML +=`<div style="color: green">¡Has comprado ${item.nombre} por ${item.precio} de oro! Aumentó tu ataque en ${item.stats.ataque}.</div>`;
                    }
                    // aplica estadísitcas de curación
                    if (item.stats.curación !== undefined) {
                        jugador1.puntosSalud += item.stats.curación;
                        consola.innerHTML +=`<div style="color: green">¡Has comprado ${item.nombre} por ${item.precio} de oro! Recuperaste ${item.stats.curación} puntos de salud.</div>`;
                    }
                    //Imprime estadísticas
                    consola.innerHTML +=`<div>Estadísticas después de la compra - Ataque:", ${jugador1.puntosAtaque}, "Salud:", ${jugador1.puntosSalud}, "Dinero:", ${jugador1.dinero}</div>`;
                } else {
                    consola.innerHTML +=`<div style="color: red">"No tienes suficiente oro para comprar este ítem.</div>`;
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
                        consola.innerHTML += `<div style="font-weight: bold">Has elegido luchar contra el enemigo. ¡Buena suerte en la batalla!</div>`;
                        lucharEnemigo();
                    });

                    btnComprar.addEventListener('click', function () {
                        consola.innerHTML += `<div style="font-weight: bold">Has elegido comprar ítems. ¡Ve a la tienda y elige sabiamente!</div>`;
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
