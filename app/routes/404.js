module.exports=function(app){
    app.get("/404", function(req, res){
        res.render("secao/404");
    });
}