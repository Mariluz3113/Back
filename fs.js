//Node.js tiene un módulo nativo llamado "fs" (File System)
// que permite leer, escribir, eliminar y manipular archivos.

import {createServer} from "http" // PUERTOS
import { readFile, writeFileSync} from 'fs'; //  operaciones con archivos (escribir, leer, borrar, etc.)
import { join } from 'path'; //> para construir rutas compatibles entre sistemas (Windows, Mac, Linux)

const PORT =3000;
const filePath = join(process.cwd(), 'users.json');


console.log('Ruta del archivo:', filePath);

const server = createServer ((req, res) => {
    const data = await readFile(filePath, 'utf8');
    const users = JSON.parse(data);
    const method = req.method
    const url = req.url



    if(method === "GET" && url === "/") {
        res.writeHead(200, {"Content-Type": "texte/plain"});
        res.end("Bienvenido a mi server");
        return; 
    }
}
writeFileSync(filePath, JSON.stringify(users, null, 2));
console.log(`✅ Archivo users.json creado en:\n${filePath}`);

readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error al leer el archivo:', err);
    return; // Salimos si hay error
  }

  // Convertimos el texto JSON de vuelta a objeto
  const parsedUsers = JSON.parse(data);
  console.log('📂 Contenido leído desde el archivo:', parsedUsers);
});