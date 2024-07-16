const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const bookRouter = require('./routes/bookRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/v1/books', bookRouter);

app.use('/images', express.static(path.join(__dirname, 'images')));

// port
const port = 5000;
app.listen(port, () => {
  console.log('Running on port ', port);
});
