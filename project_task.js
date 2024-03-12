// Defino las listas para extraer los mensajes

const animales = ['perro', 'jabalí', 'elefante', 'manatí', 'leon', 'rinoceronte', 'zorro', 'hipopótamo'];
const comidas = ['purina', 'alfalfa', 'fruta', 'zapallo', 'coco', 'carne humana', 'insectos', 'piña'];
const lugares = ['su casa', 'el patio', 'la cocina', 'el comedor', 'la calle', 'la selva'];

// función para seleccionar un elemento aleatorio de la lista

const seleccLista = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Genero el mensaje 

const generarMsj = () => {
    const animal = seleccLista(animales)
    const comida = seleccLista(comidas)
    const lugar = seleccLista(lugares)
    const x = `El ${animal} quiere comer ${comida} en ${lugar}`
    return x   
}

// funcion para guardar mensaje 

const fs = require('fs');

const keepMessage = mensaje => {
    const rutaArchivo = "/g/Mi unidad/05_workstation/01_works/04_codigo/workspace/04_estudios/02_libros_y_cursos/ca_full-stack/javascript/mensajes.txt"
    fs.appendFile(rutaArchivo, mensaje + '\n', (err) => {
        if (err) throw err;
        console.log('Mensaje guardado')
    });

}


const mensaje = generarMsj();
console.log(mensaje);
keepMessage(mensaje);








