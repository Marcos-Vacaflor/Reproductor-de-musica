//Frenar musica
function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    playPauseIcon.className = "fas fa-play";
  }

//Stop doble click

function dblClickStop() {
    titulo.innerHTML = "Pro Music";
    cover.src = "/img/default.jpg";
    audio.src = "";
    audio.setAttribute("value2", "primero-lista");
    durationI.className = "hidden-duration";
    currentT.className = "hidden-current";
    timeInfo.className = "hidden-info";
  }
  