import app from "./src/app.js"

const porta = process.env.PORT || 4300;

app.listen(porta,  () =>{
    console.log(`Servidor escutando na porta em http://localhost:${porta}`)
})
