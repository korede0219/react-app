import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';


function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology.',
      posterURL: ' https://www.aceshowbiz.com/images/still/inception_poster01.jpg',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space.',
      posterURL: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating: 4,
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces the Joker, a criminal mastermind.',
      posterURL: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      rating: 5,
    },
    {
      title: 'Avengers: Endgame',
      description: 'Superheroes unite to reverse the damage caused by Thanos.',
      posterURL: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      rating: 4,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the reality is a simulated world.',
      posterURL: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      rating: 5,
    },
     {
      title: 'Musafa The Lion King',
      description: 'A young lion prince flees his kingdom after the death of his father.',
      posterURL: 'https://i.pinimg.com/originals/03/28/87/0328873a64e006b58c59bfc6f8f3b427.jpg',
      rating: 4,
    },
    
    
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        padding: '40px 20px',
        color: '#333',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontWeight: '700', fontSize: '2.8rem', color: '#1e40af' }}>
          🎬 Movie Explorer
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
          Add, filter, and enjoy your favorite movies!
        </p>
      </header>

      <Filter setFilter={setFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />

      <footer
        style={{
          textAlign: 'center',
          marginTop: '60px',
          color: '#94a3b8',
          fontSize: '0.9rem',
        }}
      >
        &copy; 2025 Movie Explorer. All rights reserved.
        <br />
        Made with ❤️ by  Sam_
      </footer>
    </div>
  );
}

export default App;
