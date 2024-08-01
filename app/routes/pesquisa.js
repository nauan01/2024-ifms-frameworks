module.exports=function(app){
    app.get("/pesquisa", function(req, res){
        res.render("secao/pesquisa");
    });
}