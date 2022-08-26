const http = require("http")

const porta = 4300;

 const rotas = {
    '/': 'Curso node',
    '/Livros': 'Entrei na busca de livros',
    '/Autores': 'Listagem de autores'
 };

const server = http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {
        'Content-Type': 'text/plain'
        });

    resposta.end(rotas[requisicao.url]);
});

server.listen(porta,  () =>{

    console.log(`Servidor escutando na porta em http://localhost:${porta}`)
})
