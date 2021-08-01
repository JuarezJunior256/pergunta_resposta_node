const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/pergunta");

connection
  .authenticate()
  .then(() => {
    console.log("conexão ok");
  })
  .catch((erro) => {
    console.log(erro);
  });

// habilita o express a renderizar o html usando ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  res.send(`titulo: ${titulo}, descrição: ${descricao}`);
});

app.listen(8080, () => {
  console.log("App rodando na porta 8080");
});
