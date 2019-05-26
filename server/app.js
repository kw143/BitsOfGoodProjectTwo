require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');
const cors = require('cors');



const app = express();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
mongoose.connection.on("connected", () => {
    console.log("Success: connected to MongoDb!");
});
mongoose.connection.on("error", err => {
    console.log("Error connecting to MongoDb: " + err);
    process.exit(1);
});

app.use(cors()) // Use this after the variable declaration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/api', indexRouter);
app.use('/todos', todosRouter);
app.use('/users', usersRouter);

// Render React page
app.use(express.static(path.join(__dirname, "../client/build/")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = app;
