const fs = require('fs')
const path = require('path')
const fsPromises = fs.promises

async function ClassDirectoryCreate (pathFileTxt, nameNewFile) {
  try {
    const newDirectoryPath = path.join(pathFileTxt, nameNewFile)
    await fsPromises.mkdir(newDirectoryPath) // created new directory
    console.log('Create Directoory Sucess!')
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = ClassDirectoryCreate

// ----- // ----- // ----- // NOTES_ON_DEVELOPMENT // ----- // ----- // ----- //

/*
  - Una clase que crea una nueva carpeta de forma asyncronica
  - recibe dos argumentos (direccion Archivo, Nombre Archivo)
*

// ----- // ----- // ----- // BIBLIOGRAFIA // ----- // ----- // ----- //

/*
  -
*/

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
