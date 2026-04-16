// 💖 INICIO
function empezar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("contenido").style.display = "block";

  const musica = document.getElementById("musica");
  if (musica) {
    musica.volume = 0.05;
    musica.play();
  }
}

// MOSTRAR SORPRESA
function mostrarSorpresa() {
  document.getElementById("sorpresa").style.display = "block";

  setTimeout(() => {
    document.getElementById("juego").style.display = "block";
    mostrarPregunta();
  }, 4000);
}

// 📅 CONTADOR
const fechaInicio = new Date("2026-01-07");

function actualizarContador() {
  const hoy = new Date();
  const dias = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));
  document.getElementById("contador").innerText =
    "Llevamos " + dias + " días juntos ❤️";
}
actualizarContador();

// 🎯 PREGUNTAS (TUS TEXTOS)
const preguntas = [
  {
    pregunta: "¿Nuestros colores favoritos? 🎨",
    opciones: ["Rojo y azul", "morado y anaranjado", "Verde y amarillo"],
    correcta: "Rojo y azul"
  },
  {
    pregunta: "¿Nuestra fruta favorita? 🥭",
    opciones: ["Sandia", "Mango", "Uva verde"],
    correcta: "Mango"
  },
  {
    pregunta: "¿Nuestra comida favorita? 🍽️",
    opciones: [
      "Sudado de pollo / Ceviche / Lentejas",
      "Lentejas / Sudado de pollo / Parrillada",
      "Hamburguesa / Sudado de pollo / Lentejas"
    ],
    correcta: "Lentejas / Sudado de pollo / Parrillada"
  },
  {
    pregunta: "¿Nuestro número favorito? 😏",
    opciones: ["13", "7", "10"],
    correcta: "7"
  }
];

let i = 0;

// MOSTRAR PREGUNTA
function mostrarPregunta() {
  document.getElementById("pregunta").innerText = preguntas[i].pregunta;

  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  preguntas[i].opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.innerText = op;
    btn.className = "opcion-btn";
    btn.onclick = () => verificar(op);
    opcionesDiv.appendChild(btn);
  });
}

// VERIFICAR RESPUESTA
function verificar(respuesta) {
  if (respuesta === preguntas[i].correcta) {
    i++;

    if (i < preguntas.length) {
      mostrarPregunta();
    } else {
      document.getElementById("juego").style.display = "none";
      document.getElementById("premio").style.display = "block";
      lanzarConfetti();
    }

  } else {
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    document.getElementById("pregunta").innerText =
      "Apoco si mi carechimbita 😏";

    setTimeout(() => {
      mostrarPregunta();
    }, 2000);
  }
}

// 🎁 PREMIO
function reclamarPremio() {
  document.getElementById("premio").style.display = "none";
  document.getElementById("final").style.display = "block";
  lanzarConfetti();
}

// 🎉 CONFETTI
function lanzarConfetti() {
  for (let j = 0; j < 60; j++) {
    const conf = document.createElement("div");
    conf.className = "confetti";

    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = Math.random() > 0.5 ? "red" : "blue";

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}

// 🌷 DECORACIÓN
const elementos = ["❤️","💙","🌷","7"];

function crearElemento() {
  const contenedor = document.getElementById("decoracion");
  if (!contenedor) return;

  const el = document.createElement("div");
  el.className = "elemento";
  el.innerText = elementos[Math.floor(Math.random() * elementos.length)];

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (20 + Math.random() * 20) + "px";
  el.style.animationDuration = (5 + Math.random() * 3) + "s";

  contenedor.appendChild(el);

  setTimeout(() => el.remove(), 8000);
}

// SIEMPRE ACTIVO
window.onload = () => {
  setInterval(crearElemento, 500);
};