// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


// FUNCION PARA MODIFICAR TEXTOS
function asignaTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
 // FUNCION PARA AGREGAR AMIGOS
function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
   
    if (!amigoIngresado || amigoIngresado == Number(amigoIngresado)) {
    alert("Ingrese un nombre correcto");
    

    } else {
    listaAmigos.push(amigoIngresado);
    amigo.value = "";
    amigo.focus();
    mostrarListaAmigos();
    console.log(amigoIngresado);
    console.log(listaAmigos);
    }
}

// FUNCION PARA MOSTRAR LISTA AMIGOS
function mostrarListaAmigos() {
    let listaAmigosHTML = document.getElementById("listaAmigos");
    listaAmigosHTML.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = listaAmigos[i];
        listaAmigosHTML.appendChild(elementoLista);

    }
    return;
}

// FUNCION PARA SORTERAR AMIGOS
function sortearAmigo() {
    if (listaAmigos === 0) {
        alert("Ingrese al menos un amigo");
        return;
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `Tu amigo secreto es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    return;

}

asignaTextoElemento("h1", "Amigo Secreto");
asignaTextoElemento("h2", "Ingrese el nombre del amigo secreto")
agregarAmigo();