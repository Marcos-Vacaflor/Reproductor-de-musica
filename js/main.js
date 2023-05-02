//Array de canciones
const songsList = [
  { Title: "The Four Horsemen", File: "The Four Horsemen.mp3", Cover: "1.jpg" },
  { Title: "Marginado", File: "Marginado.mp3", Cover: "2.jpg" },
  {
    Title: "La Leyenda del Hada y el Mago",
    File: "La Leyenda del Hada y el Mago.mp3",
    Cover: "3.jpg",
  },
  {
    Title: "Dreaming of Home",
    File: "Marco Polo, Dreaming of Home.mp3",
    Cover: "4.jpg",
  },
  {
    Title: "Long Live Rock N Roll",
    File: "Long Live Rock N Roll.mp3",
    Cover: "5.jpg",
  },
];



// Captura elementos del DOM
const songs = document.querySelector(".songs");
const audio = document.querySelector("#audio");
const cover = document.querySelector("#cover");
const titulo = document.querySelector("#titulo");
const playPause = document.querySelector(".play");
const playPauseIcon = document.querySelector("#play-pause");
const next = document.querySelector("#following");
const prev = document.querySelector(".prev");
const controls = document.querySelector(".controls");
const prog = document.querySelector(".progress");
const progContainer = document.querySelector(".progress-container");
const stopButton = document.querySelector(".stop");
const currentT = document.querySelector(".progress-seg");
const player = document.querySelector(".player");
const durationI = document.querySelector(".audio-duration");

//Eventos
playPause.addEventListener("click", () => playPauseFunc());
playPause.addEventListener("click", () => changeActiveClass(actualSong));
audio.addEventListener("timeupdate", () => progress());
stopButton.addEventListener("click", () => stopSong());
stopButton.addEventListener("click", () => removeClass());
stopButton.addEventListener("dblclick", () => dblClickStop());



// Cargar y mostrar lista de canciones 
function loadSongs() {
  songsList.map((song, index) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = song.Title;
    link.href = "#";
    link.addEventListener("click", () => loadSong(index));
    link.addEventListener(
      "mouseover",
      () => (link.style.textDecoration = "underline")
    );
    link.addEventListener(
      "mouseout",
      () => (link.style.textDecoration = "none")
    );
    li.appendChild(link);
    songs.appendChild(li);
    audio.setAttribute("value2", "primero-lista");
  });
}

let actualSong;




//Go

loadSongs();
