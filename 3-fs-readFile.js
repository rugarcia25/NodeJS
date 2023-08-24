const fs = require('node:fs')

console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (_err, text) => {
  // necesitamos indicar la codificación y la función callback para poder indicarle a Node que ha terminado de leer el archivo
  console.log('Primer texto', text)
})

console.log('Haciendo cosas mientras se lee primer archivo')

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (_err, text2) => {
  // necesitamos indicar la codificación y la función callback para poder indicarle a Node que ha terminado de leer el archivo
  console.log('Segundo texto', text2)
})
