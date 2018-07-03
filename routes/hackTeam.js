

var express= require('express');//.Router;
var app=express.Router();

var cntr= require('../controllers/hackTeamController.js');

app.route('/teams').get(cntr.findAll);
app.route('/teams').post(cntr.addteam);
app.route('/teams/:id').put(cntr.updateteam);
app.route('/teams').delete(cntr.deleteteam);
app.route('/teams/:id').get(cntr.findById);


module.exports=app;