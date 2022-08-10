const http = require("http");
const port = 5000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei em Livros',
    '/autores': 'Entrei em Autores'
}


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost/${port}`)
})