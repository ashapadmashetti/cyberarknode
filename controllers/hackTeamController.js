
var url = "mongodb://localhost:27017/Reactathon";

var mongojs = require('mongojs');

var db = mongojs(url);
var mycollection = db.collection('HACK_TEAM')

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving team: ' + id);
   
        mycollection.findOne({'_id':mongojs.ObjectId(id)}, function(err, docs) {
            res.send(docs);
        });
    
};
 
exports.findAll = function(req, res) {
    console.log('Retrieving All Teams');
    mycollection.find().toArray(function (err, docs) {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            console.log('Success: ' + JSON.stringify(docs));
            res.send(docs);
        } 
    })
};
 
exports.addteam = function(req, res) {
    var hack = req.body;
    console.log('Adding Team: ' + JSON.stringify(hack));
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.insert(hack, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result);
            }
        });
   // });
}
 
exports.updateteam = function(req, res) {
    var id = req.params.id;
    var hack = req.body;
    console.log('Updating Team: ' + id);
    console.log(JSON.stringify(hack));
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.update({'_id':mongojs.ObjectId(id) }, { $set: hack}, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating hack: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(hack);
            }
        });
    //});
}
 
exports.deleteteam = function(req, res) {
    var id = req.params.id;
    console.log('Deleting team: ' + id);
   // db.collection('HACK_USERS', function(err, collection) {
        mycollection.remove({'_id':mongojs.ObjectId(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
   // });
}
