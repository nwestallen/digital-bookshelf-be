const express = require('express');
const Book = require('./books-model');

const router = express.Router();

router.get('/:user_id', (req, res) => {
  Book.getByUser(req.params.user_id)
    .then(books => {
      res.json(books);
    })
    .catch(err => res.status(500).json({message: err.message}));
});

module.exports = router;