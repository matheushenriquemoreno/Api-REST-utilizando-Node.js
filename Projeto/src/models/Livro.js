import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String},
        Titulo: {type: String, required: true},
        Autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}, // Adicionando o relacionamento entre entidades
        Editora: {type: String},
        NumeroPagina: {type: Number}
    }   
)

const livros = mongoose.model('livros', livroSchema) // crio a coleção no banco.

export default livros;