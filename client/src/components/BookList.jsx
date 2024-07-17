import React, { useState } from 'react';
import Book from './Book';
import Popup from './Popup';
import { toast } from 'react-toastify';
import EditBook from './EditBook';

const BookList = ({ books }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showEditBook, setShowEditBook] = useState(false);

  const handleConfirmDelete = async (id) => {
    const url = `http://localhost:5000/api/v1/books/delete/${id}`;
    try {
      const res = await fetch(url, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Book deleted successfully');
      } else {
        toast.error('Error deleting Book');
      }
    } catch (error) {
      throw new Error(error.message);
    }
    setShowPopup(false);
  };

  const handleDeleteClick = (book) => {
    setShowPopup(true);
    setSelectedBook(book);
  };

  const handleEditClick = (book) => {
    setShowEditBook(true);
    setSelectedBook(book);
  };

  const handleConfirmEdit = async (updatedBook) => {
    const url = `http://localhost:5000/api/v1/books/update/${updatedBook.id}`;
    const formData = new FormData();
    formData.append('title', updatedBook.title);
    formData.append('author', updatedBook.author);
    formData.append('year', updatedBook.year);
    if (updatedBook.image instanceof File) {
      formData.append('image', updatedBook.image);
    }

    try {
      const res = await fetch(url, {
        method: 'PUT',
        body: formData,
      });
      if (res.ok) {
        toast.success('Book updated successfully');
      } else {
        toast.error('Error updating Book');
      }
    } catch (error) {
      throw new Error(error.message);
    }
    setShowEditBook(false);
  };

  return (
    <div>
      {showPopup && (
        <Popup
          message="Do you really want to delete the book? This action cannot be undone"
          onConfirm={() => handleConfirmDelete(selectedBook.id)}
          onCancel={() => setShowPopup(false)}
        />
      )}
      {showEditBook && (
        <EditBook
          book={selectedBook}
          onCancel={() => setShowEditBook(false)}
          onConfirm={handleConfirmEdit}
        />
      )}
      <small className="small">
        {books.length} {books.length === 1 ? 'book' : 'books'}
      </small>
      <div className="books">
        {books &&
          books.map((book, inx) => (
            <Book
              key={inx}
              book={book}
              onDelete={() => handleDeleteClick(book)}
              onEdit={() => handleEditClick(book)}
            />
          ))}
      </div>
    </div>
  );
};

export default BookList;
