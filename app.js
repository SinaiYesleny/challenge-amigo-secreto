// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    console.log(amigo) //compruebo que se ingrese el amigo
    
    if(amigo === "") {
        alert("Por favor, ingresa un amigo");
        return;
    } else {
        amigos.push(amigo);
        console.log(amigos) //compruebo que se ingrese el amigo al array amigos
    }
    document.getElementById("amigo").value = ""; //limpio el input
    actualizarListaAmigos();
}
document.querySelector(".button-add").addEventListener("click", agregarAmigo)

//Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
    console.log(listaAmigos);

}
document.querySelector(".button-add").addEventListener("click", actualizarListaAmigos)

//Implementa una función para sortear los amigos
function sortearAmigo() {
    if(amigos == []) {
        alert("No hay amigos para sortear");}
    else {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        console.log(amigoSecreto)
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = amigoSecreto;
        resultado.appendChild(li);
    }
}

document.querySelector(".button-draw").addEventListener("click", sortearAmigo)
