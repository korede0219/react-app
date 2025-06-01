import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {movies.length > 0 ? (
        movies.map((movie, i) => <MovieCard key={i} movie={movie} />)
      ) : (
        <p style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '60px' }}>
          No movies match your filter criteria.
        </p>
      )}
    </div>
  );
}

export default MovieList;
