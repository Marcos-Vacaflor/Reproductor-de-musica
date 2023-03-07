//Indicador de duración de la canción

function durationIndicator(duration) {
    let min = Math.floor((duration / 60) % 60);
    let sec = duration % 60;
    if (audio.play) {
      min = min < 10 ? "0" + min : min;
  
      sec = sec < 10 ? "0" + sec : sec;
  
      durationI.innerHTML = min + ":" + sec;
    } else {
      min = 0;
      sec = 0;
      durationI.innerHTML = min + ":" + sec;
    }
  }