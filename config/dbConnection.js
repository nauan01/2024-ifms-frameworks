var mysql = require('mysql');
module.exports = function (){
    return mysql.createConnection({
        host: 'localhost',
        user: 'ifms',
        password: 'ifms2024!',
        database: 'portal_noticias'
    });
}
