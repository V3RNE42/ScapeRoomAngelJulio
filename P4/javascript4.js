window.onload = function () {
  window.alert(
    "Tienes tres minutos para desactivar la bomba antes de que explote!!!"
  );

  let tresminutos = 180;
  let numericos = document.querySelector("#contador");
  cuentaAtras(tresminutos, numericos);
};
function cuentaAtras(duracion, numericos) {
  let desc = document.getElementById("descarga");
  desc.addEventListener("click", () => {
    descarga = true;
  });
  let bomba = document.getElementById("bomba");
  let cuello = document.getElementById("cuello");
  let btnRojo = document.getElementById("rojo");
  let btnAzul = document.getElementById("azul");
  let btnVerde = document.getElementById("verde");
  let passwd = document.getElementById("password");
  let salida = document.getElementById("salida");
  let presentacion = document.getElementById("presentacion");
  btnVerde.addEventListener("click", () => {
    btnVerde.innerHTML = "No inspecciones la bomba!";
  });
  btnAzul.addEventListener("click", () => {
    document.getElementById("miniFormulario").style.display = "block";
  });
  passwd.addEventListener("change", () => {
    if (passwd.value == 2002) {
      btnRojo.innerHTML = "ENVIAR";
      btnRojo.style.backgroundColor = "grey";
      btnAzul.style.display = "none";
      btnVerde.style.display = "none";
      salida.style.color = "red";
    }
  });
  btnRojo.addEventListener("click", () => {
    if (passwd.value == 2002) {
      detenerTiempo = true;
      window.alert("Desactivaste la bomba!");
      presentacion.style.display = "none";
      bomba.style.display = "none";
      cuello.style.display = "none";
      contador.style.display = "none";
      desc.style.display = "none";
      passwd.style.display = "none";
      salida.style.display = "block";
    }
  });
  let descarga = false;
  let detenerTiempo = false;
  let cont = duracion,
    minutos,
    segundos;
  setInterval(function () {
    btnRojo.disabled = true;
    btnAzul.disabled = true;
    btnVerde.disabled = true;
    minutos = parseInt(cont / 60, 10);
    segundos = parseInt(cont % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos; //asignador ternario  8^)
    segundos = segundos < 10 ? "0" + segundos : segundos;

    numericos.textContent = minutos + ":" + segundos;
    if (numericos.textContent === "00:00") location.reload();

    if (descarga === true) {
      btnAzul.disabled = false;
      btnRojo.disabled = false;
      btnVerde.disabled = false;
    }
    if (!detenerTiempo) {
      cont--;
    }
    if (cont < 0 && detenerTiempo === false) {
      cont = duracion;
    }
  }, 1000);
}

// Que al cargar la página le salga una bomba distinta, poner 2-3
// Que tengan que cortar un cable
// Y que inspeccionen la bomba
// Las instrucciones están en un documento o algo así que se descargue
// Y nada más cargar la pagina un alert diciéndole el tiempo que tienen antes de que explote
// si no se reinicia, la bomba explota (es decir, la página vuelve a cargar y lo mismo
//no le toca la bomba que es, con lo cual tienen que volver a cargar la página
// En el sentido de que en las instrucciones diga "Bomba con cables rojos" por ejemplo y
// tengan que recargar buscando cual tiene un cable rojo
// Pero lo mismo ambas tienen cables rojos, entonces tienen que buscar "una que tenga pilas"
// Que tienen que tener el botón presionado durante no sé cuanto tiempo
// Si no se puede tan complejo lo vas simplificando
// Como no podrán clicar sobre la bomba porque es una imagen, botones que ponga cable rojo
//  y otro botón redondo dejar pulsado y cosas así
// Si quieres coger ideas mírate un vídeo del juego que hay de desactilet bombas
// Que es del que se me ocurrió
