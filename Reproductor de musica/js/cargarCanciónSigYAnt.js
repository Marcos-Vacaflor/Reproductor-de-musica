
//Canción siguiente
function loadNextSong(songIndex) {
    stopSong();
  
    if (songIndex === songsList.length - 1) {
      loadSong(0);
    } else {
      loadSong(songIndex + 1);
    }
  }
  
  //Canción anterior
  function loadPrevSong(songIndex) {
    stopSong();
  
    if (songIndex === 0) {
      loadSong(songsList.length - 1);
    } else {
      loadSong(songIndex - 1);
    }
  }
  