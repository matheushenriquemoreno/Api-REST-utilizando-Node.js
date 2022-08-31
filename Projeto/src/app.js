import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

/* Criando coneção com o banco */
db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco executada com sucesso")
})

const app = express();

app.use(express.json()); // informo que as requicições que vão chegar vai ser com o formato Json

routes(app)



export default app