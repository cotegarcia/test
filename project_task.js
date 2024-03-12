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
    return `El ${animal} quiere comer ${comida} en ${lugar}`
}

console.log(generarMsj)

