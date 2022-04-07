
let contactos = {
    id: [1144046696, 16466826],
    nombres: ["efrain ", "andres"],
    apellidos: ["solorzano", "gaviria"],
    telefono: [3052428442, 3016693220],
    ubicacion: ["itagui", "medellin"],
};

/*  funcion para agregar contacto */
alert("agregar contacto")
function agregarContacto() {
    contactos.id.push(prompt("id"));
    contactos.nombres.push(prompt("nombres"));
    contactos.apellidos.push(prompt("apellidos"));
    contactos.telefono.push(prompt("telefono"));
    contactos.ubicacion.push(prompt("ubicacion"));
}
agregarContacto();
console.log(contactos)


let contactoEliminar
/* funcion para eliminar un contacto */
function borrarContacto(contactoEliminar) {
    for (i = 0; i <= contactos.nombres.length - 1; i++) {
        if (contactos.nombres[i] == contactoEliminar) {
            contactos.nombres[i].splice(i, 1)
        };
    };
}
borrarContacto(prompt("eliminar contacto"))
alert(contactos.nombres);



