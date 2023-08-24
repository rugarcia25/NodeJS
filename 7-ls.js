// Ejercicio: Crear el comando LS --> Listar

const fs = require('node:fs')

fs.readdir('.', (err, files) => { // Ruta '.' es la actual
  if (err) {
    console.log('Error al leer el directorio: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
