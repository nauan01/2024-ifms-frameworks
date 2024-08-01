
var consign = require("consign"); //carrega o consign que automatiza as rotas **npm install --save consign**
var express = require("express");//carrega o expresse que implementa as rotas **npm install --save express**
var bodyParser = require('body-parser')// diponibiliza a utilização de variavéis passadas por post em form´s **npm install --save body-parser**

// implemente o express na variável  app
var app = express();
//identificar a engine e pasta onde estão as views
app.set("view engine", "ejs");
 app.set("views", "./app/views");

//Utilizado para disponibilizar acesso aos arquivos CSS e JS 
app.use(express.static("./app/public"));
//configura em app a utilização das variávies passadas por post de form´s 
app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({
  extended: true
}));

//levanta todas as rotas bem como o banco de dados para app
consign()
.include('app/routes')
.then('config/dbConnection.js')
.into(app);

//redireciona as rodas inexistentes para 404
app.use(function (req, res) {
    res.status(200).render("secao/404");
});

module.exports = app;
