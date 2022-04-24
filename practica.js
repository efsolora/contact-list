const listaDeContactos = [
    {
        id: 1144046696,
        nombre: "efrain",
        apellido: "solorzano",
        telefono: 3052428442,
        ubicacion: "itagui",
    },
    {
        id: 16466826,
        nombre: "efrain",
        apellido: "gaviria",
        telefono: 3117058334,
        ubicacion: "medellin",
    },
    {
        id: 1017198841,
        nombre: "lorena",
        apellido: "navarro",
        telefono: 3053084303,
        ubicacion: "medellin",
    }
];

/* funcion añadir un contacto */

function agregarContacto() {
    const nuevoContacto = {
        id: parseInt(prompt("escribe id del contacto")),
        nombre: prompt("escribe nombre del contacto"),
        apellido: prompt("escribe apellido del contacto"),
        telefono: parseInt(prompt("escribe telefono del contacto")),
        ubicacion: prompt("escribe ubicacion del contacto"),
    };
    listaDeContactos.push(nuevoContacto);

};

/* funcion borrar un contacto */

function borrarContacto() {
    const borrarContactoPorId = parseInt(prompt("escriba el id del contacto que desea eliminar"));
    for (i = 0; i <= listaDeContactos.length - 1; i++) {
        if (listaDeContactos[i].id == borrarContactoPorId) {
            delete listaDeContactos[i].id,
                delete listaDeContactos[i].nombre,
                delete listaDeContactos[i].apellido,
                delete listaDeContactos[i].telefono,
                delete listaDeContactos[i].ubicacion;

        };
    }
};


/* actualizar contacto */

function actualizarContactos() {
    const actualizarContacto = parseInt(prompt("escriba el id del contacto que desea actualizar"));
    for (i = 0; i <= listaDeContactos.length - 1; i++) {
        if (listaDeContactos[i].id == actualizarContacto) {
            listaDeContactos[i].id = parseInt(prompt("escriba el nuevo id del contacto", listaDeContactos[i].id)),
                listaDeContactos[i].nombre = prompt("escriba el nuevo nombre del contacto", listaDeContactos[i].nombre),
                listaDeContactos[i].apellido = prompt("escriba el nuevo apellido del contacto", listaDeContactos[i].apellido),
                listaDeContactos[i].telefono = parseInt(prompt("escriba el nuevo telefono del contacto", listaDeContactos[i].telefono)),
                listaDeContactos[i].ubicacion = prompt("escriba la nueva ubicacion del contacto", listaDeContactos[i].ubicacion);
        }
    }
};

/* funcion para ordenar contactos */

function ordenarContactos() {
    const ordenListaContacto = prompt("ordena tus contactos de la siguiente forma: \n 1. por nombre\n 2. por apellido\n 3. por id");
    if (ordenListaContacto == "1") {
        listaDeContactos.sort((a, b) => {
            const nombreA = a.nombre.toLowerCase();
            const nombreb = b.nombre.toLowerCase();
            if (nombreA < nombreb) {
                return -1;
            }

            if (nombreA > nombreb) {
                return 1;
            }
            return 0;
        });
    }

    if (ordenListaContacto == "2") {
        listaDeContactos.sort((a, b) => {
            const apellidoA = a.apellido.toLowerCase();
            const apellidob = b.apellido.toLowerCase();
            if (apellidoA < apellidob) {
                return -1;
            }

            if (apellidoA > apellidob) {
                return 1;
            }
            return 0;
        });
    }

    if (ordenListaContacto == "3") {
        listaDeContactos.sort((a, b) => {
            const idA = a.id;
            const idB = b.id;
            return idA - idB;
        });

    }; console.table(listaDeContactos);
};
/* funcion para mostrar menu*/

function mostrarMenu() {
    alert("Arma tu lista de contactos");
    const menuLista = prompt(
        "menu: \n 1. agregar contacto\n 2. borrar contacto\n 3. actualizar contacto\n 4. ordenar contactos\n 5. mostrar lista de contactos");

    if (menuLista == "1") {
        agregarContacto();
        mostrarMenu();
    }

    if (menuLista == "2") {
        borrarContacto();
        mostrarMenu();
    }

    if (menuLista == "3") {
        actualizarContactos();
        mostrarMenu();
    }

    if (menuLista == "4") {
        ordenarContactos();
        mostrarMenu();
    }

    if (menuLista == "5") {
        console.table(listaDeContactos);
        mostrarMenu();
    }

    if (menuLista > 5 || ordenarLista < 1) {
        alert("opcion incorrecta");
        mostrarMenu();
    };

}; mostrarMenu();


