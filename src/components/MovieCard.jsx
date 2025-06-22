import React from 'react';
import MovieCard from './MovieCard.css';


function MovieCard({ movie }) {
  return (
    
    <div
      style={{
        backgroundColor: '#f8fafc',
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        width: '300px',
        margin: '20px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
        
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: '100%', height: 'auto', borderRadius: '15px 15px 0 0' }}
      />
      <div style={{ padding: '15px' }}>
        <h2
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            margin: '0 0 10px',
            height: '40px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {movie.title}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#4b5563',
            margin: '0 0 12px',
            height: '60px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3', 
            WebkitBoxOrient: 'vertical',
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
