import Express from "express";
import livroController from "../Controllers/LivrosController.js";

const router = Express.Router();

router
    .get("/livros", livroController.listarLivros)



export default router;  