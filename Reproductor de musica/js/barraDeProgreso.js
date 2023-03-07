
//Movimiento de barra de progreso
function progress() {
    let currentTimePorcentual = (audio.currentTime * 100) / audio.duration;
    prog.style.width = currentTimePorcentual + "%";
    let currentTimeSeg = audio.currentTime.toFixed(0);
    let duration = audio.duration.toFixed(0);
    durationIndicator(duration);
    timeIndicator(currentTimeSeg);
    if (audio.ended) {
      stopSong();
    }
  }