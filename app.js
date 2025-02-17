// crear un array para almacenar los nombres
let Amigos = [];

function AgregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //validar que el campo no este vacio
    if (nombreAmigo === "") {
        alert("por favor, inserte un nombre");
        return;
    }
// agregar el nombre a la array
    Amigos.push(nombreAmigo);

actualizarlista();

inputAmigo.value = "";
inputAmigo.focus();

}
function actualizarlista() {
    const listaAmigosul =document.getElementById("listaAmigos");
    listaAmigosul.innerHTML = "";

    Amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigosul.appendChild(li)
    });
    }
    
// funcion para generar un amigo aleatorio
function sortearAmigo() {

    // valida que haya un amigo
    if (Amigos.length === 0) {
alert("No hay amigos para sortear, Agregar al menos un amigo");
return
    }
// genera un indice aleatorio
//obtener el nombre sorteado
    const amigosorteado = Amigos[(Math.floor(Math.random() * Amigos.length))];

    //muestra el resultado en el html
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigosorteado}</li>`;

}
// asignar los botones
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnadicional").addEventListener("click", AgregarAmigo)
    document.getElementById("btnsortear").addEventListener("click", sortearAmigo);
});