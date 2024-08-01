var http = require('http');
var server = http.createServer(function (req, res) {

    var categoria = req.url;
    if (categoria == '/cursos') {
        res.end("<html> <body>IFMS Not&iacutecias de Cursos</body></html>");
    } else if (categoria == '/esportes') {
        res.end("<html> <body> IFMS - Not&iacutecias de Esportes</body></html>");
    } else if (categoria == '/pesquisa') {
        res.end("<html> <body> IMFS - Not&iacutecias de Pesquisas</body></html>");
    } else {
        res.end("<html> <body> Portal IFMS Not&iacutecias</body></html>");
    } //novo comentáriop
});

server.listen(3000);
console.log('Escutando a porta 3000');