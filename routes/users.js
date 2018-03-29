var express = require('express');
var router = express.Router();


router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


router.get('/:username', function(req, res) {
    var user= req.params.username;
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({username: user},{},function(e,docs){
        res.json(docs);
    });
});


router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.createIndex({"username":1}, {unique:true});
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: "User Name already exists" }
        );
    });
});

router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;
