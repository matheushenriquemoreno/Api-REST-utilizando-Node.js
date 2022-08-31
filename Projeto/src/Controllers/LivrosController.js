import livros from "../models/Livro.js";

class livroController {

    static listarLivros = (req, res) => {
     livros.find((erro, livros) => {
            console.log(erro)
            res.status(200).json(livros)
        });
    }
}

export default livroController
