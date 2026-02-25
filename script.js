const boton = document.getElementById("generarBtn");
const contenedor = document.getElementById("contenedorPaletas");
const mensaje = document.getElementById("mensajeEstado");

function generarHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generarHsl() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generarPaleta() {

  const cantidad = document.getElementById("cantidad").value;
  const formato = document.getElementById("formato").value;

  contenedor.innerHTML = "";

  const paleta = document.createElement("div");
  paleta.classList.add("paleta");

  for (let i = 0; i < cantidad; i++) {

    let color = formato === "HEX" ? generarHex() : generarHsl();

    const colorDiv = document.createElement("div");
    colorDiv.classList.add("colorItem");
    colorDiv.style.backgroundColor = color;
    colorDiv.textContent = color;

    paleta.appendChild(colorDiv);
  }

  contenedor.appendChild(paleta);

  mensaje.textContent =
    "Se generó una paleta con " + cantidad +
    " colores en formato " + formato + ".";
}

boton.addEventListener("click", generarPaleta);
//