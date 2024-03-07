var express = require('express');
var app = express();
app.set('view engine','ejs'); //informa ao express que serpa usado ejs como engrenagem das views
app.set('views','./app/views'); // indica o caminho das viwes

module.exports = app;