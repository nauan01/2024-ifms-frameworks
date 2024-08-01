var mysql = require("mysql");

var connMysql = function () {
    console.log("Conexão estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ifms',
        database: 'portal_noticias'
    });
}
module.exports = function () {
    console.log('autoload DB ok!');
    return connMysql;
}
