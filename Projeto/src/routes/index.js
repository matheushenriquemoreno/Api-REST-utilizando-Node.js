import Express from "express";
import livrosRoutes from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ Titulo: "Curso De Node" })
    })

    app.use(
        Express.json(),
        livrosRoutes
    )
}

export default routes;


