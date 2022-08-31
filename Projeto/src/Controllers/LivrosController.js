import livros from "../models/Livro.js";

class livroController {

    static listarLivros = (req, res) => {
     livros.find((erro, livros) => {
            console.log(erro)
            res.status(200).json(livros)
        });
    }

    static cadastrarLivro = (req, res) => {
       
        let livro = new livros(req.body);

        livro.save((erro) => {
            if(erro){
                res.status(500).send({message: `${erro.message} - Falha ao cadastrar o livro`})
            }
            else{
                res.status(201).send(livro.toJSON())
            }
        });
    }


    static atualizarLivro = (req, res) => {
        const { id } = req.params

        livros.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro){
                res.status(200).send({message: "Livro foi atualizado com sucesso"})
            }else{
                res.status(200).send( {message: erro.message})
            }
        })
    }

    static buscarPeloID = (req, res) =>{

        const { id } = req.params; 

        livros.findById(id, (erro, livro) =>{
            if(erro){
                res.status(400).send({message: `${erro.message} - Livro não encontrado`})
            }else{
                res.status(200).send(livro)
            }
        })

    }



}

export default livroController
