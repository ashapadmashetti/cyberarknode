module.exports=function(app){
    var hackUsers=require('./hackUserRoute.js');

    app.use('/cyberarknode/',hackUsers);
}