import { useState } from 'react';
import { toast } from 'react-toastify';

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '' });
  const [imageFile, setImageFile] = useState(null);
  const url = 'http://localhost:5000/api/v1/books/addBook';

  const addBook = async () => {
    const formData = new FormData();
    formData.append('title', book.title);
    formData.append('author', book.author);
    formData.append('year', book.year);
    formData.append('image', imageFile);

    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        toast.success('Book added successfully');
        resetForm();
      } else {
        toast.error('Failed to add Book');
        console.log(res.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const resetForm = () => {
    setBook({ title: '', author: '', year: '' });
    setImageFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <>
      <div className="title">Add a new book to your library!</div>
      <form onSubmit={handleSubmit} className="add-book">
        <h1>Add Book</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={book.year}
          onChange={handleChange}
        />
        <input type="file" onChange={handleImageChange} />

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBook;
