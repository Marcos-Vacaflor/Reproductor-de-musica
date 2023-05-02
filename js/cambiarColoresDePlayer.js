//Cambiando color de fondo
//Codigo de tercero
const playerColor = document.querySelector(".player");
const colorProg = document.querySelector(".progress");
const colorProgCont =document.querySelector(".progress-container");
const volSliderColor= document.querySelector("#volume-slider");
const SlidContColor = document.querySelector(".slider-cont");


function getAverageColor(imageElement, ratio) {
  const canvas = document.createElement("canvas");

  let height = (canvas.height = imageElement.naturalHeight);
  let width = (canvas.width = imageElement.naturalWidth);

  const context = canvas.getContext("2d");
  context.drawImage(imageElement, 0, 0);

  let data, length;
  let i = -4,
    count = 0;

  try {
    data = context.getImageData(0, 0, width, height);
    length = data.data.length;
  } catch (err) {
    console.error(err);
    return {
      R: 0,
      G: 0,
      B: 0,
    };
  }
  let R, G, B;
  R = G = B = 0;

  while ((i += ratio * 4) < length) {
    ++count;

    R += data.data[i];
    G += data.data[i + 1];
    B += data.data[i + 2];
  }

  R = ~~(R / count);
  G = ~~(G / count);
  B = ~~(B / count);

  return {
    R,
    G,
    B,
  };
}

const image = document.querySelector("img");
image.onload = () => {
  const { R, G, B } = getAverageColor(image, 4);

  

  playerColor.style.background = `linear-gradient(to top,
    rgb(${R}, ${G},${B}), 
    rgb(${R + 10}, ${G + 15},${B + 20}), 
    rgb(${R + 15}, ${G + 15},${B + 10}),
    rgb(${R + 50}, ${G + 60},${B + 70}),
    rgb(${R + 55}, ${G + 60},${B + 60}),
    rgb(${R + 60}, ${G + 50},${B + 30}),
    rgb(${R + 10}, ${G + 20},${B + 30}),
    rgb(${R - 10}, ${G - 10},${B - 10}))`;

    colorProg.style.background = `linear-gradient(to right,
    rgb(${R}, ${G},${B}), 
    rgb(${R + 10}, ${G + 15},${B + 20}), 
    rgb(${R + 15}, ${G + 15},${B + 10}),
    rgb(${R + 10}, ${G + 20},${B + 30}),
    rgb(${R - 10}, ${G - 10},${B - 10}))`;
    colorProgCont.style.background = `rgb(${R + 120}, ${G + 100},${B + 90})`;

    volSliderColor.style.background = `linear-gradient(to right,
     
    rgb(${R + 30}, ${G + 35},${B + 40}), 
    rgb(${R + 35}, ${G + 40},${B + 20}),
    rgb(${R + 10}, ${G + 20},${B + 30}),
    rgb(${R - 10}, ${G - 10},${B - 10}))`;
    SlidContColor.style.background = `rgb(${R + 120}, ${G + 100},${B + 90})`;
};

