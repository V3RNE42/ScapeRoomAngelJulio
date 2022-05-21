window.addEventListener("load", eventos);

function eventos() {
  window.alert(
    "Si fallas alguna pregunta del test o tardas más de 15 segundos en total, la pantalla se reinciará"
  );
  let quincesegundos = 15;
  let numericos = document.querySelector("#contador");
  cuentaAtras(quincesegundos, numericos);
}
function pregunta1() {
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.display = "flex";
}
function pregunta2() {
  if (document.getElementById("nota").value >= 4.5) {
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "flex";
  }
}
function pregunta3() {
  document.getElementById("p3").style.display = "none";
  document.getElementById("final").style.display = "block";
  document.getElementById("final").style.fontSize = "xxx-Large";
}
function cuentaAtras(duracion, numericos) {
  let cont = duracion,
    minutos,
    segundos;
  setInterval(function () {
    minutos = parseInt(cont / 60, 10);
    segundos = parseInt(cont % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    numericos.textContent = minutos + ":" + segundos;
    if (numericos.textContent === "00:00") location.reload();

    cont--;

    if (cont < 0) {
      cont = duracion;
    }
  }, 1000);
}
