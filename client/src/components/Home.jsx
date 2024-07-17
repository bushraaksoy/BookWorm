import React, { useEffect, useState } from 'react';
import Book from './Book';
import BookList from './BookList';
import Popup from './Popup';
import EditBook from './EditBook';

const Home = () => {
  const [books, setBooks] = useState('');
  const [search, setSearch] = useState('');

  const booksUrl = `http://localhost:5000/api/v1/books`;
  const searchUrl = `http://localhost:5000/api/v1/books/search?q=${search}`;

  const getBooks = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getBooks(booksUrl);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getBooks(searchUrl);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="input-field">
        <input
          className="text-input"
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
      <BookList books={books} />
    </>
  );
};

export default Home;
