import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String},
        Titulo: {type: String, required: true},
        Autor: {type: String},
        Editora: {type: String},
        NumeroPagina: {type: Number}
    }   
)

const livros = mongoose.model('livros', livroSchema) // crio a coleção no banco.

export default livros;