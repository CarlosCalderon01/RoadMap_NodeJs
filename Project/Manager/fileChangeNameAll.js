const fs = require('fs/promises')
const path = require('path')

const carpeta = 'D:\\subPath'
// const formatListIMG = ['.gif', '.jpeg', '.jpg', '.png']
const formatListVID = ['.mp4', '.webm']
const nameFormatFil = ['VID', 'IMG']
const extensionDeseada = formatListVID[1]
const nameArchiveFile = nameFormatFil[0]
const contador = 1

async function fileChangeNameAll (carpeta, extensionDeseada, contador) {
  try {
    const archivos = await fs.readdir(carpeta)

    await Promise.all(archivos.map(async (archivo) => {
      const rutaAntigua = path.join(carpeta, archivo)
      const extensionActual = path.extname(archivo)

      if (extensionActual === extensionDeseada) {
        const nuevoNombre = `${nameArchiveFile}_${contador}${extensionActual}`
        const nuevaRuta = path.join(carpeta, nuevoNombre)

        contador++

        await fs.rename(rutaAntigua, nuevaRuta)
        console.log(`El archivo ${archivo} fue renombrado a ${nuevoNombre}`)
      }
    }))
    console.log('Operación completada exitosamente.')
  } catch (error) {
    console.error('Error durante la operación:', error)
  }
}

fileChangeNameAll(carpeta, extensionDeseada, contador)
