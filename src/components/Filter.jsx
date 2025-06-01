import React from 'react';

function Filter({ setFilter }) {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prev) => ({ ...prev, rating: Number(e.target.value) }));
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto 40px',
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
      }}
    >
      <input
        type="text"
        placeholder="Search by title..."
        onChange={handleTitleChange}
        style={{
          flex: 2,
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
        type="number"
        min="0"
        max="5"
        placeholder="Min rating"
        onChange={handleRatingChange}
        style={{
          flex: 1,
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
    </div>
  );
}

export default Filter;
