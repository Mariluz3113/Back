
import {createServer} from "http" // PUERTOS
// http://localhost:3000/users
const users = [ //
  { id: 1, name: 'Ana', email: 'ana@mail.com' },
  { id: 2, name: 'Luis', email: 'luis@mail.com' },
  { id: 3, name: 'Carla', email: 'carla@mail.com' },
];

const server = createServer ((req, res) => {
    //const {method,url}= req;
    const method = req.method
    const url = req.url

    //endpoint ruta raiz ->  que espera recibir y que corresponde
    if(method === "GET" && url === "/") {
        res.writeHead(200, {"Content-Type": "texte/plain"});
        res.end("Bienvenido a mi server");
        return; 
    } // sino se cumple por difinicion se hac...

    if (method === 'GET' && url.startsWith('/usuario'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(users); // Si lo enviamos así corremos el riesgo de que no se convierta a JSON correctamente
        const usuarioId = Number (url.split ("/")[2])
        const usuario = users.find(user => user.id == usuarioId);
        if (!usuario){
            res.end("usuario no existe");
        }    
        res.end(j)
        return;
    } 
    // Si la ruta no existe -> devolvemos 404

    res.writeHead(400, {"Content-Type": "texte/plain"}); // no siempre va "content-Type...."
    res.end("Ruta no encontrada en mi Server");
      
}
)
// el servidor es un objeto y listen es un valor
// los objeos tienen atributos y valores, 
const PORT = 3000

server.listen (PORT, () => {
    console.log("Server corriendo");
}
)