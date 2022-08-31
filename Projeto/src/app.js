import express from "express"
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"

/* Criando coneção com o banco */
db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco executada com sucesso")
})

const app = express();

app.use(express.json()); // informo que as requicições que vão chegar vai ser com o formato Json


routes(app);


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