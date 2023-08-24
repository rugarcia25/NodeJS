const fs = require('node:fs') // a partir de Node 16, es recomendable usar node: antes del módulo

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // si es archivo
  stats.isDirectory(), // si es directorio
  stats.isSymbolicLink(), // si es enlace simbolico
  stats.size // tamaño en bites
)
