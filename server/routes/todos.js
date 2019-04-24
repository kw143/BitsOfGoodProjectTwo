const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

const testTodo = new TodoItem({
    task: "test task"
});


router.get('/add', (req, res) => {
    testTodo.save()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        });
});

module.exports = router;