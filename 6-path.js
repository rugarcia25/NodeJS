const path = require('node:path')

// Revisar la barra separadora que utiliza tu SO
console.log(path.sep)
// path.basename --> Consigues el nombre del fichero con extensión
const base = path.basename('/hola/noseque/archivo.txt')
console.log(base)

// path.filename --> Consigues el nombre del fichero sin la extensión
const file = path.basename('/hola/noseque/archivo.txt', '.txt')
console.log(file)

// path.extension --> Conseguir la extensión de un archivo
const extension = path.extname('/hola/noseque/archivo.txt', '.txt')
console.log(extension)

// UNIR RUTAS CON PATH.JOIN
const filePath = path.join('contenido', 'subfolder')
console.log(filePath)
