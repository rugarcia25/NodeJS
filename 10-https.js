const http = require('node:http')
const { encontrarPuerto } = require('./11-free-ports.js')

const server = http.createServer((req, res) => {
  console.log('Request recibida')
  res.end('Hola mundo')
})

encontrarPuerto(0).then(port => {
  server.listen(port, () => {
    console.log(`Servidor escucha en el puerto http://localhost:${port}`)
  })
})
