import Express from "express";
import AutorController from "../Controllers/AutoresController.js";
const router = Express.Router();

router
    .get("/autores", AutorController.listarautores)
    .get("/autores/:id", AutorController.buscarPeloID)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)
export default router;  