import Express from "express";
import livroController from "../Controllers/LivrosController.js";

const router = Express.Router();

/*A order da rota tem importancia, tem que ser da mais especifica para a menos.*/ 
router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivrosEditora)
    .get("/livros/:id", livroController.buscarPeloID)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)

    .delete("/livros/:id", livroController.excluirLivro)
export default router;  