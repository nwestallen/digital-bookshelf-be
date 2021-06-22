const express = require('express');
const cors = require('cors');

const server = express();
const bookRouter = require('./books/books-router');

server.use(cors());
server.use(express.json());

server.use('/api/books', bookRouter);


module.exports = server;