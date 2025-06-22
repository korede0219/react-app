import React, { useState } from 'react';
import './AddMovie.css';

function AddMovie({ onAdd }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '', trailer: '' });
  };

  return (
    <div className="add-movie-container fade-in">
      <form onSubmit={handleSubmit} className="add-movie-form">
        <h2>Add a New Movie</h2>
        <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} required />
        <input type="text" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} required />
        <input type="text" name="rating" placeholder="Rating (1-10)" value={newMovie.rating} onChange={handleChange} required />
        <input type="text" name="trailer" placeholder="Trailer Link (YouTube embed)" value={newMovie.trailer} onChange={handleChange} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
