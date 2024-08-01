
module.exports = function (app) {
    app.get("/noticias", function (req, res) {
        var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        });
    })
    app.get("/noticias/:id", function (req, res) {
        res.send("ola id");

    })
    app.get("/noticias/:Identificacao/:NomeCompleto", function (req, res) {
        res.send("ola identificação e nome completo");

    })
    app.post("/noticias/:titulo/:noticia", function (req, res) {
        var conexao = app.config.dbConnection();
        var queryNoticias 
        = 'INSERT INTO noticias (tit ulo,noticia) VALUES ("'
        +req.params.titulo+'","'+req.params.noticia+'")'; 
        conexao.query(queryNoticias,function (error, result) {
            console.log(error);
            res.send(error.errno+" | "+error.sql+" | "+error.sqlMessage);
        })
    })
}
