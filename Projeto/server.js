const http = require("http")


const porta = 4300;

const server = http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {
        'Content-Type': 'text/plain'
        });

    resposta.end('Curso de Node');
});

server.listen(porta,  () =>{

    console.log(`Servidor escutando na porta em http://localhost:${porta}`)
})
