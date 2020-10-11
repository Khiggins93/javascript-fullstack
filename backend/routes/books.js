const { Router } = require('express');
const { closeSync } = require('fs-extra');
const Book = require('../models/Book');
const router = Router();

require('../models/Book');

router.get('/', async(req, res) => {
    const books = await Book.find();
    res.json(books);

});

router.post('/', async (req, res) => {
    const {title, author, isbn} = req.body;
   const newBook = new Book({title, author, isbn});
   await newBook.save();
    console.log(newBook);
    res.send({message: 'Book Save'});
});

router.delete('/:id', async (req, res) => {
    const DeleteBook = Book.findByIdAndDelete(req.params.id);
    console.log(DeleteBook);
    res.send({message: 'Book Delete'});
})

module.exports = router;