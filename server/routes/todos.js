const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');



router.post('/add', (req, res) => {
    const toBeAdded = new TodoItem({
       task: req.body.taskText,
       completed: req.body.completed
    });
    toBeAdded.save()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        });
});

router.get('/all', (req, res) => {
    TodoItem.find(function (error, results) {
        res.send(results);
    });
});

router.post('/remove', (req, res) => {
    TodoItem.findOneAndDelete({_id: req.body.id}, function (error, results) {
    }).then(_ => {TodoItem.find(function (error, results) {
        res.send(results);
    });});

});

router.post('/toggle', (req, res) => {
    TodoItem.findOneAndUpdate({_id: req.body.id}, {completed: !req.body.complete}).then(_ => {TodoItem.find(function (error, results) {
        res.send(results);
    });});

});

module.exports = router;