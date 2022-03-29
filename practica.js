
let contactos = {
    id: 1144046696,
    nombres: "efrain ",
    apellidos: "solorzano",
    telefono: 3052428442,
    ubicacion: "itagui",
}

/*  funcion para agregar contacto */

let nuevoContacto;
function agregarContacto(contactos) {

}
alert("agrega un contacto")
alert(agregarContacto(prompt(contactos)));



/* funcion para eliminar un contacto */
let contactoParaEliminar;
function borrarContacto(contactoParaEliminar) {
    for (i = 0; i <= contactos.length - 1; i++) {
        if (contactos[i] == contactoParaEliminar) {
            contactos.splice(i, 1)
        };
    } return contactos;
}
alert("elimina un contacto");
alert(borrarContacto(prompt(contactoParaEliminar)));


/* funcion para imprimir en consola la lista de contactos */
function imprimirListaDeContactos() {
    return contactos;
}
alert("contactos actuales")
console.log(contactos);



