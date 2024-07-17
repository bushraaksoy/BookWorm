const path = require('path');
const multer = require('multer');
const connectDB = require('../db/connect');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

const addBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const imagePath = req.file.path;
    await connectDB(
      `INSERT INTO books (title, author, image, year) VALUES ('${title}', '${author}', '${imagePath}', '${year}')`
    );
    res.status(201).send('Book added successfully');
  } catch (error) {
    res.send(error.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, year } = req.body;
    console.log('Request body: ', req.body);
    const imagePath = req.file ? req.file.path : null;

    console.log(id, title, author, year);

    let query = `
      UPDATE books 
      SET title = '${title}', author = '${author}', year = '${year}'
      ${imagePath ? `, image = '${imagePath}'` : ''}
      WHERE id = '${id}'`;

    await connectDB(query);
    res.status(200).send('Book updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const records = await connectDB(`SELECT * FROM books`);
    res.status(201).send(records);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const records = await connectDB(`SELECT * FROM books WHERE id='${id}'`);
    res.send(records);
  } catch (error) {
    res.send(error.message);
  }
};

const searchBook = async (req, res) => {
  try {
    const { q } = req.query;
    console.log(q);
    const records = await connectDB(
      `SELECT * FROM books WHERE title ILIKE '%${q}%' OR author ILIKE '%${q}%' LIMIT 50;`
    );
    res.status(200).send(records);
  } catch (error) {
    res.send(error.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await connectDB(`DELETE FROM books WHERE id=${id}`);
    res.send('Book deleted successfully');
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllBooks,
  addBook,
  searchBook,
  deleteBook,
  getBookById,
  updateBook,
  upload,
};
