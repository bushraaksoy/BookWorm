import React, { useState } from 'react';
import placeholder from '/placeholder-image.jpg';
import { toast } from 'react-toastify';

const EditBook = ({ book, onConfirm, onCancel }) => {
  const [selectedBook, setBook] = useState({ ...book });
  const [imageSrc, setImageSrc] = useState(
    selectedBook.image
      ? `http://localhost:5000/${selectedBook.image}`
      : placeholder
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...selectedBook, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      setBook({ ...selectedBook, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(selectedBook);
  };

  return (
    <div className="popup-container">
      <div className="popup edit-popup">
        <div className="title">Edit Book</div>
        <form onSubmit={handleSubmit} className="edit-book">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={selectedBook.title || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={selectedBook.author || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={selectedBook.year || ''}
            onChange={handleChange}
          />
          <div className="edit-book-image">
            <img src={imageSrc} alt="" />
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="buttons">
            <button type="button" onClick={onCancel} className="cancelBtn">
              Cancel
            </button>
            <button type="submit" className="editBtn">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
