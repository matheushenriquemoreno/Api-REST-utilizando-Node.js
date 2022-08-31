import Express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ Titulo: "Curso De Node" })
    })

    app.use(
        Express.json(),
        livros
    )
}

export default routes;


