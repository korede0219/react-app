import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className="movie-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="movie-card" style={{ background: '#2c2c2c', padding: '15px', borderRadius: '10px', width: '200px', textAlign: 'center', color: '#fff' }}>
            <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;