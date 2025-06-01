import React, { useState } from 'react';

function AddMovie({ addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newMovie.title.trim() ||
      !newMovie.posterURL.trim() ||
      newMovie.rating < 0 ||
      newMovie.rating > 5
    ) {
      alert('Please fill in Title, Poster URL and Rating (0-5).');
      return;
    }

    addMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '650px',
        margin: '0 auto 50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '15px',
      }}
    >
      <input
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newMovie.title}
        style={{
          padding: '12px 15px',
          fontSize: '16px',
          borderRadius: '12px',
          border: '1px solid #cbd5e1',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
      />
      <input
        name="posterURL"
        placeholder="Poster URL"
        onChange={handleChange}
        value={newMovie.posterURL}
        style={{
          padding: '12px 15px',
          fontSize: '16px',
          borderRadius: '12px',
          border: '1px solid #cbd5e1',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
      />
      <input
        name="rating"
        type="number"
        min="0"
        max="5"
        placeholder="Rating (0-5)"
        onChange={handleChange}
        value={newMovie.rating}
        style={{
          padding: '12px 15px',
          fontSize: '16px',
          borderRadius: '12px',
          border: '1px solid #cbd5e1',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
      />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={newMovie.description}
        style={{
          padding: '12px 15px',
          fontSize: '16px',
          borderRadius: '12px',
          border: '1px solid #cbd5e1',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
      />
      <button
        type="submit"
        style={{
          gridColumn: 'span 2',
          padding: '14px 0',
          fontSize: '18px',
          fontWeight: '600',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#2563eb',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#2563eb')}
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;
