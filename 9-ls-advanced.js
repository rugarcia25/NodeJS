// Ejercicio: Crear el comando LS Avanzado --> Listar

const pc = require('picocolors')

const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`No se pudo leer el directorio ${folder}`)
    process.exit(1) // Controlamos la salida
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // Stats --> Info del archivo
    } catch {
      console.error(pc.red(`No se pudo leer el archivo: ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory
    const fileType = isDirectory ? 'dir' : 'file'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folder)
