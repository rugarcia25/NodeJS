// Creamos las funciones que queramos

saludar = (name) => {
    return `Hola ${name}`
}

saludarMundo = () => {
    return `Hola Mundo!`
}

suma = (a,b) => {
    return a+b;
}

// Exportamos las funciones deseadas en módulos

module.exports = saludar;
module.exports = saludarMundo;
module.exports = suma;