const volumeSlider = document.querySelector("#volume-slider");
const volumeContainer = document.querySelector(".volume-container");
const volumeIcon = document.querySelector(".volume-icon i");
const sliderCont = document.querySelector(".slider-cont");

//Eventos volumen

volumeIcon.addEventListener("mouseover", () => {
  volumeIcon.style.visibility = "visible";
});
volumeIcon.addEventListener("mouseover", () => {
  volumeContainer.style.visibility = "visible";
});
volumeIcon.addEventListener("mouseout", () => {
  volumeContainer.style.visibility = "hidden";
});
volumeIcon.addEventListener("click", () => mute());
volumeContainer.addEventListener(
  "mouseover",
  () => (volumeContainer.style.visibility = "visible")
);
volumeContainer.addEventListener("mouseout", () => {
  volumeContainer.style.visibility = "hidden";
});
sliderCont.addEventListener("click", (event) => volume(event));
document
  .querySelector(".player")
  .addEventListener("mousemove", (event) => presionVol(event));
sliderCont.addEventListener("mousedown", (event) => clickVol(event));
document
  .querySelector(".player")
  .addEventListener("mouseup", (event) => clickUpVol(event));

//Funciones de volumen
audio.volume = 0.5;
let x;
function volume(event) {
  console.log(event.pageX);
  if (event.pageX >= 68 && event.pageX <= 216) {
    const sliderPorcentual = (((event.pageX - 68) * 100) / 147).toFixed(0);
    const volumePorcentual = sliderPorcentual + "%";
    volumeSlider.style.width = volumePorcentual;
    audio.volume = sliderPorcentual / 100;
    x = sliderPorcentual;
    if (sliderPorcentual <= 35){
      volumeIcon.className= "fas fa-volume-down"
    }else if(sliderPorcentual >= 36){
      volumeIcon.className= "fas fa-volume-up"
    }
  }
}

function presionVol(event) {
  if (sliderCont.getAttribute("value") == "true") {
    volume(event);
  }
}

function clickVol(event) {
  let ev = event.isTrusted;
  sliderCont.setAttribute("value", ev);
}
function clickUpVol(event) {
  if (
    event.target.className === "sliderCont" ||
    event.target.className === "volumeSlider" ||
    event.target.className !== "sliderCont" ||
    event.target.className !== "volumeSlider"
  ) {
    sliderCont.setAttribute("value", "false");
  }
}

function mute() {
  if (audio.volume !== 0) {
    if (audio.volume === 0.5) {
      x = 50;
    }
    audio.volume = 0;
    volumeIcon.className = "fas fa-volume-mute";
  } else if (audio.volume === 0) {
    const sliderPorcentual = x;

    audio.volume = sliderPorcentual / 100;
    x = sliderPorcentual;
    if (sliderPorcentual <= 35){
      volumeIcon.className= "fas fa-volume-down"
    }else if(sliderPorcentual >= 36){
      volumeIcon.className= "fas fa-volume-up"
    }
  }
}
