const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");

// Pegando a lib expressa
const app = express();

// Analisando objetos json em objetos js
app.use(bodyParser.json());

// Obtendo rotas
app.use("/", routes);

// segurança de descanso
app.use(helmet());

// usando cor para os pedidos
app.use(cors());

// Organizando os erros
app.use(morgan("combined"));

app.get("/", function(req, res) {
    res.send("Get request to the homepage! Go to-> /patient to register :)");
});

app.listen(4344, function () {
    console.log("Servidor rodando na porta 4344");
})