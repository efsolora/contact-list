
let contactos = {
    id: [1144046696, 16466826],
    nombres: ["efrain", "andres"],
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

let eliminarContacto
/* funcion para eliminar un contacto */
function borrarContacto(eliminarContacto) {
    for (i = 0; i <= contactos.nombres.length; i++) {
        if (contactos.nombres[i] == eliminarContacto) {
            contactos.nombres.splice(i, 1);
            contactos.id.splice(i, 1);
            contactos.apellidos.splice(i, 1);
            contactos.telefono.splice(i, 1);
            contactos.ubicacion.splice(i, 1);
        }
    }

    return contactos.nombres;
}
borrarContacto(prompt("eliminar contacto"));
alert(contactos.nombres);
console.log(contactos);
/*  funcion para modificar contactos */
let modificarContacto
function modificarUnContacto(modificarContacto) {
    for (i = 0; i <= contactos.nombres.length; i++) {
        if (contactos.nombres[i] == modificarContacto) {
            contactos.nombres[i] = prompt("nombres");
            contactos.id[i] = prompt("id");
            contactos.apellidos[i] = prompt("apellidos");
            contactos.telefono[i] = prompt("telefono");
            contactos.ubicacion[i] = prompt("ubicacion");
        }
    }
}
modificarUnContacto(prompt("modifica un contacto"));
alert(contactos.nombres);


