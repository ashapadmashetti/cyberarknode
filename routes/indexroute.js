module.exports=function(app){
    var hackUsers=require('./hackUserRoute.js');
    var hack=require('./hackMaster.js');

    app.use('/cyberarknode/',hackUsers);
    app.use('/cyberarknode/',hack);
}