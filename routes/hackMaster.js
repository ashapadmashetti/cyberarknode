

var express= require('express');//.Router;
var app=express.Router();

var cntr= require('../controllers/hackMasterController.js');

app.route('/hacks').get(cntr.findAll);
app.route('/hacks').post(cntr.addhack);
app.route('/hacks/:id').put(cntr.updatehack);
app.route('/hacks').delete(cntr.deletehack);
app.route('/hacks/:id').get(cntr.findById);


module.exports=app;