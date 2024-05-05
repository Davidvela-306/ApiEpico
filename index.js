import InformativeCard from "./components/InformativeCard.js";

let inputImage = "cloud";
InformativeCard(inputImage);

const contenedor = document.getElementById("root");
const natural = document.getElementById("natural");
const enhanced = document.getElementById("enhanced");
const aerosol = document.getElementById("aerosol");
const cloud = document.getElementById("cloud");

natural.addEventListener("click", () => {
  InformativeCard("natural");
  while (contenedor.children.length >= 1) {
    contenedor.removeChild(contenedor.firstChild);
  }
});
enhanced.addEventListener("click", () => {
  InformativeCard("enhanced");
  while (contenedor.children.length >= 1) {
    contenedor.removeChild(contenedor.firstChild);
  }
});
aerosol.addEventListener("click", () => {
  InformativeCard("aerosol");
  while (contenedor.children.length >= 1) {
    contenedor.removeChild(contenedor.firstChild);
  }
});
cloud.addEventListener("click", () => {
  InformativeCard("cloud");
  while (contenedor.children.length >= 1) {
    contenedor.removeChild(contenedor.firstChild);
  }
});
