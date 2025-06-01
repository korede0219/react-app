import React from 'react';

function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        width: '260px',
        margin: '15px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
      />
      <div style={{ padding: '15px' }}>
        <h2
          style={{
            margin: '10px 0 6px',
            fontSize: '20px',
            fontWeight: '600',
            color: '#1e40af',
          }}
        >
          {movie.title}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#64748b',
            height: '55px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={movie.description}
        >
          {movie.description}
        </p>
        <p
          style={{
            marginTop: '12px',
            fontWeight: '700',
            color: '#f59e0b',
            fontSize: '16px',
          }}
        >
          ⭐ {movie.rating} / 5
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
