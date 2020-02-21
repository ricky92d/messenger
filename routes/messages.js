var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function(req,res){
    db.Message.find().then(function(todos){
        res.json(todos);
    }).catch(function(err){
        res.send(err);
    })
});

router.post("/", function(req,res){
    db.Message.create(req.body).then(function(newTodo){
        res.status(201).json(newTodo);
    }).catch(function(err){
        res.send("error");
    })
});



// router.get('/')
//     .get(helpers.getTodos)
//     .post(helpers.createTodo)

// router.route('/:todoId')
//     .get(helpers.getTodo)
//     .put(helpers.updateTodo)
//     .delete(helpers.deleteTodo);

module.exports = router;