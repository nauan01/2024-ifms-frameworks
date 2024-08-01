module.exports=function(app){
    app.get("/esportes", function(req, res){
        res.render("secao/esportes");
    });
}