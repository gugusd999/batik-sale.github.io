$(document).ready(function(){
    var app = Sammy("#main", function(){
		this.use("Template");
        this.get("#/", function(context){
            var data = context.render('templates/hallo.template');
            console.log(data.content);
        });
    });
    app.run("#/");
})