//Cargar titulo
function LoadTitleSong(songIndex) {
    titulo.innerHTML = songsList[songIndex].Title;
  }
  

  //Función titulo en movimiento

titulo.style.left = "0px";

let o = 0;
function s() {
  o = o + 1;

  titulo.style.left = `${o}` + `px`;
  if (o === 360) {
    o = -360;
  }
}
setInterval(s, 25);

