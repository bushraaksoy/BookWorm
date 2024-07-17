import React from 'react';
import { toast } from 'react-toastify';
import placeholder from '/placeholder-image.jpg';

const Book = ({ book, onDelete, onEdit }) => {
  const handleEdit = async (e) => {
    e.preventDefault();
  };

  const imageSrc = book.image
    ? `http://localhost:5000/${book.image}`
    : placeholder;

  return (
    <div className="book">
      {/* <Popup visibility="visible" action={handleDelete} /> */}
      <img src={imageSrc} alt="book cover " />
      <div className="book-details">
        <div>{book.title}</div>
        <div>{book.author}</div>
        <div className="small">{book.year}</div>
        <div className="buttons">
          <button className="deleteBtn" onClick={onDelete}>
            Delete
          </button>
          <button className="editBtn" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
