//Indicador de tiempo transcurrido de la canción
function timeIndicator(currentTimeSeg) {
    let hour = Math.floor(currentTimeSeg / 3600);
    hour = hour < 10 ? "0" + hour : hour;
    let min = Math.floor((currentTimeSeg / 60) % 60);
    min = min < 10 ? "0" + min : min;
    let sec = currentTimeSeg % 60;
    sec = sec < 10 ? "0" + sec : sec;
  
    currentT.innerHTML = min + ":" + sec;
  }
  