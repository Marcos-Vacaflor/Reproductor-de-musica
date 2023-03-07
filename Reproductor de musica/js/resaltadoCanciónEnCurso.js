function changeActiveClass(actualSong) {
    const links = document.querySelectorAll("a");
  
    links.forEach((a) => {
      if (a.innerHTML !== titulo.innerHTML) {
        a.classList.remove("active");
      }
      if (titulo.innerHTML == a.innerHTML) {
        links[actualSong].className = "active";
      }
    });
  }
  function removeClass() {
    const links = document.querySelectorAll("a");
    links.forEach((a) => a.classList.remove("active"));
  }