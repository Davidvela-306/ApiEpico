import fetchData from "../utils/data.js";
import defragmentData from "../utils/defragmentData.js";

function InformativeCard(inputImage) {
  const globalContainer = document.getElementById("root");
  globalContainer.className = "container-md text-center .d-flex";
  const tarjeta = document.createElement("div");
  tarjeta.className = "row row-cols-4 d-flex justify-content-center";

  fetchData(inputImage)
    .then((data) => {
      data.forEach((element) => {
        //crear info
        const image = document.createElement("img");
        const date = defragmentData(element.date);
        image.className = "card-img-top";
        image.src = `https://epic.gsfc.nasa.gov/archive/${inputImage}/${date}/png/${element.image}.png`;
        const paragraph = document.createElement("p");
        paragraph.innerHTML = `Fecha: ${element.date} <br>
          Coordenadas:  
          <br> x:${element?.coords?.lunar_j2000_position?.x}
          <br> y:${element?.coords?.lunar_j2000_position?.y}
          <br> z:${element?.coords?.lunar_j2000_position?.z}`;
        //agregar img a tarjeta
        const individualContainer = document.createElement("div");
        //   individualContainer.style = "padding: 20px; margin: 1px;";
        individualContainer.appendChild(image);
        individualContainer.className = "card p-3 m-3";
        //agregar paragraph a tarjeta
        const textContainer = document.createElement("div");
        textContainer.className = "card-body";
        individualContainer.appendChild(textContainer).appendChild(paragraph);

        //agregar tarjeta en index.html
        tarjeta.appendChild(individualContainer);
        globalContainer.appendChild(tarjeta);
      });
    })
    .catch((error) => console.error(error));
}
export default InformativeCard;
