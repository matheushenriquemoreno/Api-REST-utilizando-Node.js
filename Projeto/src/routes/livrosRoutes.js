import Express from "express";
import livroController from "../Controllers/LivrosController.js";

const router = Express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/:id", livroController.buscarPeloID)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)

export default router;  