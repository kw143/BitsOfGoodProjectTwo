const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

const testTodo = new TodoItem({
    task: "test task"
});


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

module.exports = router;