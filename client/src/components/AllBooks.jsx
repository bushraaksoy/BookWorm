import React, { useEffect, useState } from 'react';
import Book from './Book';
import BookList from './BookList';

const AllBooks = () => {
  const url = `http://localhost:5000/api/v1/books`;
  const [books, setBooks] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getBooks();
  }, []);

  console.log(books);

  return (
    <div>
      <h1 className="title">Books</h1>
      <BookList books={books} />
    </div>
  );
};

export default AllBooks;
