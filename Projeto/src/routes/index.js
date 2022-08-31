import Express from "express";
import livrosRoutes from "./livrosRoutes.js";
import autores from "./AutoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ Titulo: "Curso De Node" })
    })

    app.use(
        Express.json(),
        livrosRoutes,
        autores
    )
}

export default routes;


