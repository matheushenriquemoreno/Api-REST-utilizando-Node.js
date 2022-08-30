import express from "express"

const app = express();

app.use(express.json()); // informo que as requicições que vão chegar vai ser com o formato Json

const livros = [
    {
        id:1, 
        titulo: "Senhor dos aneis"
    },
    {
        id: 2, 
        titulo: "o Hobbit"
    }
]

app.get('/', (requisicao, reposta) => {
reposta.status(200).send('CursoNode')
})

app.get('/Livros' ,(req, resposta) => {
    resposta.status(200).json(livros)
})

app.get('/livros/:id', (req, resp) =>{

    const index = buscaIndexLivro(req.params.id);

    resp.json(livros[index]);
})

app.post('/livros', (req, res) => {

    const data = req.body;
    livros.push(data);

    res.status(201).send('Livro foi cadastrado com sucesso');

})

app.put('/livros/:id', (req, resp) =>{

    const index = buscaIndexLivro(req.params.id);

    livros[index].titulo = req.body.titulo;

    resp.json(livros);
})

app.delete('/livros/:id', (req, res) => {

    let {id} = req.params;
    const index = buscaIndexLivro(id);

    livros.splice(index, 1)

    res.send(`Livro ${id} foi excluido com sucesso!!`);
})

const buscaIndexLivro = (id) => {
    return livros.findIndex(x => x.id == id)
}

export default app