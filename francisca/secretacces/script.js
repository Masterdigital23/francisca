// =========================================
// IA CORE v5.0
// by Israel
// =========================================

// ---------------- ELEMENTOS ----------------

const terminal = document.getElementById("terminalText");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const nextButton = document.getElementById("nextButton");
const buttonContainer = document.getElementById("buttonContainer");
const finalScreen = document.getElementById("finalScreen");
const finalText = document.getElementById("finalText");
const restart = document.getElementById("restart");

// ---------------- CONFIGURACIÓN ----------------

const velocidad = window.innerWidth < 600 ? 30 : 45;

let escena = 0;

// ---------------- UTILIDADES ----------------

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function limpiarTerminal() {
    terminal.innerHTML = "";
}

function mostrarBoton(texto = "Continuar") {
    nextButton.textContent = texto;
    buttonContainer.style.display = "block";
}

function ocultarBoton() {
    buttonContainer.style.display = "none";
}

// ---------------- MÁQUINA DE ESCRIBIR ----------------

async function escribir(texto) {

    const linea = document.createElement("div");

    linea.className = "line";

    terminal.appendChild(linea);

    for (const letra of texto) {

        linea.textContent += letra;

        await esperar(velocidad);

    }

    linea.animate(
    [
        { opacity: 0 },
        { opacity: 1 }
    ],
    {
        duration: 250,
        fill: "forwards"
    }
);

}

async function escribirBloque(lineas) {

    for (const linea of lineas) {

        await escribir(linea);

        await esperar(700);

    }

}

// ---------------- BARRA DE CARGA ----------------

async function barraCarga() {

    const mensajes = [

        "Inicializando IA...",
        "Conectando con el servidor...",
        "Verificando protocolos...",
        "Preparando análisis...",
        "Sistema listo."

    ];

    let indice = 0;

    progressText.textContent = mensajes[0];

    for (let i = 0; i <= 100; i++) {

        progressBar.style.width = i + "%";

        if (i === 25) {

            indice = 1;
            progressText.textContent = mensajes[indice];

        }

        if (i === 50) {

            indice = 2;
            progressText.textContent = mensajes[indice];

        }

        if (i === 75) {

            indice = 3;
            progressText.textContent = mensajes[indice];

        }

        if (i === 100) {

            indice = 4;
            progressText.textContent = mensajes[indice];

        }

        await esperar(35);

    }

    await esperar(1000);

}

// =========================================
// ESCENA 1
// =========================================

async function escenaInicio() {

    limpiarTerminal();

    await escribirBloque([

        "IA CORE v5.0",
        "",
        "Acceso concedido.",
        "",
        "Conectando con el servidor...",
        "Servidor encontrado.",
        "",
        "Escaneando visitante...",
        "",
        "✔ Dispositivo encontrado.",
        "✔ Navegador compatible.",
        "✔ Usuario detectado.",
        "",
        "Preparando análisis..."

    ]);

    mostrarBoton("Continuar");

}

// =========================================
// BOTÓN CONTINUAR
// =========================================

nextButton.addEventListener("click", async () => {

    ocultarBoton();

    if (escena === 0) {

        escena = 1;

        await escenaAnalisis();

    } else if (escena === 1) {

        escena = 2;

        await escenaMensaje();

    }

});

// =========================================
// INICIAR TODO
// =========================================

window.addEventListener("load", async () => {

    ocultarBoton();

    await barraCarga();

    await escenaInicio();

});

// =========================================
// ESCENA 2 - ANÁLISIS
// =========================================

async function escenaAnalisis() {

    limpiarTerminal();

    await escribir("IA CORE v5.0");
    await esperar(800);

    await escribir("");
    await escribir("Iniciando análisis...");
    await esperar(1000);

    // Crear línea de estado
    const estado = document.createElement("div");
    estado.className = "line";
    terminal.appendChild(estado);

    // Barra de progreso
    for (let i = 0; i <= 100; i++) {

        const bloques = Math.floor(i / 5);

        const barra =
            "█".repeat(bloques) +
            "░".repeat(20 - bloques);

        estado.textContent =
            `Estado: [${barra}] ${i}%`;

        await esperar(45);

    }

    await esperar(1000);

    await escribir("");
    await escribir("Análisis completado.");
    await esperar(1500);

    limpiarTerminal();

    await escribir("Procesando resultados...");
    await esperar(1000);

    const carga = document.createElement("div");
    carga.className = "line";
    terminal.appendChild(carga);

    for (let i = 0; i <= 10; i++) {

        carga.textContent =
            "■".repeat(i) +
            "□".repeat(10 - i);

        await esperar(250);

    }

    await esperar(1200);

    limpiarTerminal();

    const error = document.createElement("div");
    error.className = "line";
    error.style.color = "#ff4d4d";
    error.style.fontWeight = "bold";
    error.style.fontSize = "30px";

    terminal.appendChild(error);

    for (let i = 0; i < 6; i++) {

        error.textContent = "ERROR";

        error.style.opacity = "1";

        await esperar(250);

        error.style.opacity = ".2";

        await esperar(250);

    }

    error.style.opacity = "1";

    await esperar(800);

    await escribir("");
    await escribir("Recuperando información...");
    await esperar(1800);

    await escribir("Consultando base de datos...");
    await esperar(1800);

    await escribir("0 coincidencias encontradas.");
    await esperar(2200);

    await escribir("");
    await escribir("Ejecutando protocolo alternativo...");
    await esperar(1500);

    await escribir("");
    await escribir("Analizando variables humanas...");
    await esperar(1500);

    await escribir("");
    await escribir("Resultado:");

    await esperar(1000);

    await escribir("Variables imposibles de calcular.");

    await esperar(1500);

    limpiarTerminal();

    await escribirBloque([

        "Conclusión:",
        "",
        "Hay cosas",
        "que una inteligencia artificial",
        "simplemente no puede comprender.",

        "",

        "Como la razón",
        "por la que una persona",
        "dedicaría horas",
        "a crear algo",
        "para otra persona."

    ]);

    await esperar(2500);

    limpiarTerminal();

    await escribirBloque([

        "Actualizando protocolo...",

        "",

        "Nuevo protocolo cargado.",

        "",

        "ADVERTENCIA",

        "",

        "El siguiente contenido",

        "NO fue generado",

        "por una inteligencia artificial.",

        "",

        "Fue escrito",

        "por una persona."

    ]);

    await esperar(1500);

    escena = 1;

    mostrarBoton("Abrir mensaje");

}

// =========================================
// ESCENA 3
// MENSAJE HUMANO
// =========================================

async function escenaMensaje() {

    limpiarTerminal();

    await escribir("Cargando mensaje...");
    await esperar(1800);

    limpiarTerminal();

    await escribir("Hola fran.");
    await esperar(1200);

    await escribir("");
    await escribir("Si llegaste hasta aquí...");
    await esperar(1800);

    await escribir("Significa que decidiste continuar.");
    await esperar(2200);

    await escribir("");
    await escribir("Y antes de seguir...");
    await esperar(1500);

    await escribir("Quería decirte algo.");

    await esperar(1500);

    limpiarTerminal();

    await escribirBloque([

        "Toda esta página",

        "comenzó como una idea.",

        "",

        "No quería enviarte",

        "un mensaje cualquiera.",

        "",

        "Quería crear algo",

        "que fuera diferente."

    ]);

    await esperar(2500);

    limpiarTerminal();

    await escribirBloque([

        "Podría haberte escrito",

        "unas cuantas líneas.",

        "",

        "Pero pensé...",

        "",

        "¿Y si uso aquello",

        "que más me gusta hacer?"

    ]);

    await esperar(3000);

    limpiarTerminal();

    await escribirBloque([

        "Así nació esta página.",

        "",

        "Cada línea.",

        "Cada animación.",

        "Cada detalle.",

        "",

        "Fue hecho por mí."

    ]);

    await esperar(3000);

    limpiarTerminal();

    await escribirBloque([

        "No para impresionarte.",

        "",

        "Ni esperando",

        "una respuesta.",

        "",

        "Solo quería",

        "compartir contigo",

        "una parte",

        "de quién soy.",

        "y decirte que me",

        "encanto volverme",

        "a encontrar contigo."

    ]);

    await esperar(3500);

    mostrarPregunta();

}

// =========================================
// PREGUNTA
// =========================================

function mostrarPregunta(){

    limpiarTerminal();

    terminal.innerHTML = `

    <h2 class="question-title">
        ¿Deseas continuar?
    </h2>

    <div class="question-buttons">

        <button id="btnNo" class="ia-button">
            No
        </button>

        <button id="btnSi" class="ia-button">
            Sí
        </button>

    </div>

    `;


    const btnNo = document.getElementById("btnNo");
    const btnSi = document.getElementById("btnSi");


    btnNo.onclick = () => {

        btnNo.style.position = "relative";

        btnNo.style.left =
            (Math.random()*200-100)+"px";

        btnNo.style.top =
            (Math.random()*100-50)+"px";

    };


    btnSi.onclick = async ()=>{

        await escenaFinal();

    };

}

// =========================================
// ESCENA FINAL
// =========================================

async function escenaFinal() {

    limpiarTerminal();

    await escribir("Gracias.");
    await esperar(1500);

    await escribir("");
    await escribir("Antes que nada...");
    await esperar(1800);

    await escribir("Gracias por llegar hasta aquí.");
    await esperar(1500);


    limpiarTerminal();

    await escribirBloque([

        "No hice esta página",

        "esperando una respuesta.",

        "",

        "Ni intentando convencerte",

        "de absolutamente nada."

    ]);


    await esperar(3000);


    limpiarTerminal();

    await escribirBloque([

        "Simplemente",

        "quería compartir contigo",

        "una pequeña parte",

        "de quién soy."

    ]);


    await esperar(3000);


    limpiarTerminal();

    await escribirBloque([

        "Me gusta crear cosas.",

        "",

        "Y pensé que",

        "en lugar de escribir",

        "un mensaje cualquiera...",

        "",

        "Sería más bonito",

        "hacer algo",

        "que realmente saliera de mí."

    ]);


    await esperar(4500);


    limpiarTerminal();

    await escribirBloque([

        "Si esta pequeña experiencia",

        "logró sacarte",

        "aunque fuera",

        "una pequeña sonrisa...",

        "",

        "Entonces",

        "todo el tiempo",

        "que dediqué a crearla",

        "ya habrá valido la pena."

    ]);


    await esperar(5000);


    limpiarTerminal();

    await escribirBloque([

        "Análisis finalizado.",

        "",

        "Resultado:",

        "",

        "No disponible."

    ]);


    await esperar(1800);


    limpiarTerminal();

    await escribirBloque([

        "Hay una última variable",

        "que ninguna inteligencia artificial",

        "puede calcular."

    ]);


    await esperar(2500);


    limpiarTerminal();

    await escribirBloque([

        "¿Logré sacarte",

        "una sonrisa?"

    ]);


    await esperar(2500);


    // Mostrar pantalla final
    finalScreen.style.display = "flex";


    // Escribir mensaje final
    const texto = `

PROYECTO FINALIZADO

██████████████████████

Estado:
✔ Completado

Objetivo:

Hacer algo diferente.

No sé si conseguí
sacarte una sonrisa.

Pero espero que,
al menos por unos minutos,
esta página
te haya parecido especial.

Gracias por llegar hasta el final.

Puedes cerrar esta ventana
cuando quieras.

Gracias por tu tiempo.

Israel para francisca

`;


    let i = 0;

    finalText.innerHTML = "";


    function escribirFinal(){

        if(i < texto.length){

            if(texto[i] === "\n"){

                finalText.innerHTML += "<br>";

            }else{

                finalText.innerHTML += texto[i];

            }

            i++;

            setTimeout(escribirFinal,35);

        }

    }


    escribirFinal();



    // Botón reiniciar

    restart.onclick = () => {

        location.reload();

    };


}
