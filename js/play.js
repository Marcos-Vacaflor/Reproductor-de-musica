//Función de play y pause
function playPauseFunc() {
  
    if (audio.getAttribute("value2") === "primero-lista") {
      audio.setAttribute("value2", "0");
      loadSong(0);
    } else if (audio.paused) {
      audio.play();
      playPauseIcon.className = "fas fa-pause";
    } else {
      audio.pause();
      playPauseIcon.className = "fas fa-play";
    }
    changeActiveClass(audio.getAttribute("value2"));
  }
  