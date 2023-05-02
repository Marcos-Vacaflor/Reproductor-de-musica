const timeInfo = document.querySelector(".time-info");

//Mostrar texto emergente del tiempo al poner el puntero sobre la barra
function showTime(event) {
    let barPosition = ((event.clientX - 62) * 100) / 340;
    const barRed = barPosition.toFixed(0);
    let currentTime = ((barRed * audio.duration) / 100).toFixed(0);
  
    let x = event.clientX;
    let y = event.clientY;
  
    if (
      event.target.className === "progress-container" ||
      event.target.className === "progress"
    ) {
      timeInfo.style.left = x + 10 + "px";
      timeInfo.style.top = y + 10 + "px";
    }
  
    let min = Math.floor((currentTime / 60) % 60);
    min = min < 10 ? "0" + min : min;
    let sec = currentTime % 60;
    sec = sec < 10 ? "0" + sec : sec;
    timeInfo.innerHTML = min + ":" + sec;
  
    if (barRed >= 0 && barRed <= 100) {
      timeInfo.style.visivility = "visible";
    }
  }