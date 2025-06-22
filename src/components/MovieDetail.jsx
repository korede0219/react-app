import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetail.css';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <div className="movie-detail-loading">Loading movie details...</div>;

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate('/')}>⬅ Back to Home</button>
      <h2 className="movie-title">{movie.title}</h2>
      <div className="movie-info">
        <img className="movie-poster" src={movie.posterURL} alt={movie.title} />
        <div className="movie-description">
          <p>{movie.description}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </div>
      </div>
      {movie.trailer ? (
        <div className="movie-trailer">
          <h3>🎬 Trailer</h3>
          <iframe
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          />
        </div>
      ) : (
        <p className="no-trailer">No trailer available.</p>
      )}
    </div>
  );
}

export default MovieDetail;