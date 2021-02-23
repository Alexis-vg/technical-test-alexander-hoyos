let time = 97745;
let release = document.getElementById("release");
let timer = document.getElementById("timer");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const validarDigitos = (numero) =>
  numero >= 10 ? numero + "" : new Array(2).join("0") + numero;

const interval = setInterval(() => {
  auxtime = time;
  time--;
  days.textContent = validarDigitos(Math.floor(auxtime / 86400)) + "d";
  auxtime %= 86400;
  hours.textContent = validarDigitos(Math.floor(auxtime / 3600)) + "h";
  auxtime %= 3600;
  minutes.textContent = validarDigitos(Math.floor(auxtime / 60)) + "m";
  auxtime %= 60;
  seconds.textContent = validarDigitos(Math.floor(auxtime)) + "s";

  //en caso termine el countdown
  if (time < 0) {
    clearInterval(interval);
    release.textContent =
      "Encuentra el Curso de React.js en Nuestra Plataforma";
    timer.style.display = "none";
  }
}, 1000);
