const express = require('express');
const router = express.Router();

const {
  getAllBooks,
  addBook,
  searchBook,
  deleteBook,
  getBookById,
  updateBook,
  upload,
} = require('../controllers/bookController');

router.post('/addBook', upload.single('image'), addBook);
router.delete('/delete/:id', deleteBook);
router.put('/update/:id', updateBook);
router.get('/search', searchBook);
router.get('/:id', getBookById);
router.get('/', getAllBooks);

module.exports = router;
