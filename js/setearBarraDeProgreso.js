const setProgressCont = document.querySelector(".progress-container");
setProgressCont.addEventListener("click", (event) => setProgress(event));
player.addEventListener("mousemove", (event) => presion(event));
setProgressCont.addEventListener("mousedown", (event) => click(event));
player.addEventListener("mouseup", (event) => clickUp(event));


// Seteando barra de progreso
//Al hacer click
function setProgress(event) {
  let barPosition = ((event.clientX - 62) * 100) / 340;
    const barRed = barPosition.toFixed(0);
    let currentTimeSegSet = (barRed * audio.duration) / 100;
    audio.currentTime = currentTimeSegSet;
  }
  
  //Al mantener presionado y mover el mouse
  function presion(event) {
    if (setProgressCont.getAttribute("value") == "true") {
      setProgress(event);
    }
  }
  
  function click(event) {
    let ev = event.isTrusted;
    setProgressCont.setAttribute("value", ev);
  }
  function clickUp(event) {
    if (
      event.target.className === "progress-container" ||
      event.target.className === "progress" ||
      event.target.className !== "progress-container" ||
      event.target.className !== "progress"
    ) {
      setProgressCont.setAttribute("value", "false");
    }
  }
  