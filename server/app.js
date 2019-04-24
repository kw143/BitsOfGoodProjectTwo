const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/users', usersRouter);

// Render React page
app.use(express.static(path.join(__dirname, "../client/build/")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
