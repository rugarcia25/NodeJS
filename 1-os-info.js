const os = require('node:os')

console.log('Informacion del Sistema Operativo:')
console.log('----------------------------')
console.log('Nombre del SO:', os.platform())
console.log('Versión del SO:', os.release())
console.log('Arquitectura del SO:', os.arch())
console.log('Memoria del SO:', os.totalmem())
console.log('CPU del SO:', os.cpus())
console.log('Uptime:', os.uptime() / 60)