const express = require('express');
const Book = require('./books-model');

const router = express.Router();
router.get('/:user_id', (req, res) => {
  Book.findBy({user_id: req.params.user_id})
    .then(books => {
      res.json(books);
    })
    .catch(err => res.status(500).json({message: err.message}));
});

router.get('/:user_id/library', (req, res) => {
  Book.getLib(req.params.user_id)
    .then(library => {
      res.json(library.rows);
    })
    .catch(err => res.status(500).json({message: err.message}));
});

router.post('/:user_id', (req, res) => {
  Book.add({...req.body, user_id: req.params.user_id })
  .then(book => {
    res.status(201).json(book)
  })
  .catch(err => res.status(500).json({message: err.message}));
});

module.exports = router;