//Cargar canción seleccionada
function loadSong(songIndex) {
    audio.src = "/musica/" + songsList[songIndex].File;
    audio.play();
    LoadCoverSong(songIndex);
    LoadTitleSong(songIndex);
    changeActiveClass(songIndex);
    next.addEventListener("click", () => loadNextSong(songIndex));
    prev.addEventListener("click", () => loadPrevSong(songIndex));
    playPauseIcon.className = "fas fa-pause";
    setProgressCont.addEventListener("mousemove", (event) => showTime(event));
    audio.addEventListener("ended", () => {
      stopSong();
      loadSong(songIndex + 1);
    });
  
    audio.setAttribute("value2", songIndex);
    durationI.className = "audio-duration";
    currentT.className = "progress-seg";
    timeInfo.className = "time-info";
    actualSong=songIndex;
  }
  