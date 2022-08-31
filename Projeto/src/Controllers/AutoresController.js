import autores from "../models/Autor.js";

class AutorController {

    static listarautores = (req, res) => {
        autores.find((erro, autores) => {
            console.log(erro)
            res.status(200).json(autores)
        });
    }

    static cadastrarAutor= (req, res) => {
       
        let autor = new autores(req.body);

        autor.save((erro) => {
            if(erro){
                res.status(500).send({message: `${erro.message} - Falha ao cadastrar o autor`})
            }
            else{
                res.status(201).send(autor.toJSON())
            }
        });
    }

    static atualizarAutor= (req, res) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro){
                res.status(200).send({message: "autor foi atualizado com sucesso"})
            }else{
                res.status(200).send( {message: erro.message})
            }
        })
    }

    static buscarPeloID = (req, res) =>{

        const { id } = req.params; 

        autores.findById(id, (erro, autor) =>{
            if(erro){
                res.status(400).send({message: `${erro.message} - autor não encontrado`})
            }else{
                res.status(200).send(autor)
            }
        })

    }

    static excluirAutor = (req, res) => {
        const id =  req.params.id;

        autores.findByIdAndDelete(id, (erro) => {
            if(!erro){
                res.status(200).send({message: "autor foi removido com sucesso"})
            }
            else{
                res.status(500).send({menssage: erro.menssage})
            }
        })
    }

}

export default AutorController
