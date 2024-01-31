// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let texto = document.querySelector("#texto");
let encriptar = document.querySelector(".encriptar");
let desencriptar = document.querySelector(".desencriptar");
let mensajes = document.querySelector(".mensajes");

let contador = 1;

encriptar.addEventListener("click", (e) => {
  if (texto.value.length === 0) {
    return;
  } else {
    e.preventDefault();
    cifrar();
  }
});

desencriptar.addEventListener("click", (e) => {
  if (texto.value.length === 0) {
    return;
  } else {
    e.preventDefault();
    decifrar();
  }
});

function cifrar() {
  let mensaje = texto.value;
  let cifrado = "";
  for (let i = 0; i < mensaje.length; i++) {
    switch (mensaje[i]) {
      case "e":
        cifrado += "enter";
        break;
      case "i":
        cifrado += "imes";
        break;
      case "a":
        cifrado += "ai";
        break;
      case "o":
        cifrado += "ober";
        break;
      case "u":
        cifrado += "ufat";
        break;
      default:
        cifrado += mensaje[i];
    }
  }
  //   alert("Cifrado realizado con exito, el resultado es:" + "\n\n" + cifrado);
  agregarMensaje(cifrado);
}

function decifrar() {
  let cadena = texto.value;
  cadena = cadena.split("enter").join("e");
  cadena = cadena.split("imes").join("i");
  cadena = cadena.split("ai").join("a");
  cadena = cadena.split("ober").join("o");
  cadena = cadena.split("ufat").join("u");
  //   alert("Decifrado realizado con exito, el resultado es:" + "\n\n" + cadena);
  agregarMensaje(cadena);
}

function agregarMensaje(mensaje) {
    texto.value = ''
  if (contador === 1) {
    mensajes.innerHTML = "";
  }
  let div = document.createElement("div");
  let parrafo = document.createElement("p");
  let botonCopiar = document.createElement("button");
  //Agregando el atributo class a los elementos creados
  div.className = "caja";
  parrafo.className = "parrafo";
  botonCopiar.className = "boton-copiar";
  //Asignando un id al elemento de párrafo para poder borrarlo
  parrafo.id = "mensaje" + contador;
  //Incorporando el contenido del input en el parrafo
  parrafo.innerHTML = mensaje;
  botonCopiar.innerHTML = "Copiar";
  //Añadiendo el botón a la caja y el parrafo a la caja
  div.appendChild(parrafo);
  div.appendChild(botonCopiar);
  //Agregando el nuevo div (con su parrafo y botón) a la zona visible
  mensajes.appendChild(div);
  //Funcion que se encarga de eliminar el mensaje cuando se le da click al botón
  botonCopiar.addEventListener("click", function () {
    copiarMensaje(parrafo.id);
  });
  contador++; //Se incrementa el contador cada vez que se agrega un mensaje
}

let ventana = document.querySelector('.modal')

ventana.addEventListener('target',()=>{
    console.log('jio');
})

function copiarMensaje(id) {
  let parrafoText = document.getElementById(id);
  navigator.clipboard.writeText(parrafoText.innerText);
//   alert(`Mensaje copiado: ${parrafoText.innerText}`);
    ventana.style.opacity = "1";
    setTimeout(() => {
        ventana.style.opacity = "0";
    }, 700);
}
