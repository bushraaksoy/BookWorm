import React, { useEffect, useState } from 'react';
import Book from './Book';
import BookList from './BookList';

const SearchBook = () => {
  const [books, setBooks] = useState('');
  const [search, setSearch] = useState('');

  const url = `http://localhost:5000/api/v1/books/search?q=${search}`;

  const getBooks = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleSearch = (e) => {
    console.log('clicked');
    e.preventDefault();
    getBooks();
  };

  console.log(books);

  return (
    <div>
      <div className="title">SearchBook</div>

      <div className="input-field">
        <input
          className="text-input"
          type="text"
          value={search}
          placeholder="Search by title or author"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handleSearch} className="submit-btn">
          Search
        </button>
      </div>
      <BookList books={books} />
    </div>
  );
};

export default SearchBook;
