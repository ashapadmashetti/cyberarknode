module.exports=function(app){
    var hackUsers=require('./hackUserRoute.js');
    var hack=require('./hackMaster.js');
    var team=require('./hackTeam.js');

    app.use('/cyberarknode/',hackUsers);
    app.use('/cyberarknode/',hack);
    app.use('/cyberarknode/',team);
}