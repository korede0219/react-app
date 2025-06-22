// App.js (TMDB-integrated version)
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const API_KEY = '1b46d1e9b517e7102822c44a069760ec';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filter, setFilter] = useState({ title: '', rating: 0 });

  useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`).then(res => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`).then(res => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`).then(res => res.json()),
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=5`).then(res => res.json())
    ])
      .then(([page1, page2, page3, page4, page5]) => {
        const combined = [...page1.results, ...page2.results, ...page3.results, ...page4.results, ...page5.results];
        const formatted = combined.map(movie => ({
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          rating: movie.vote_average,
          posterURL: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          trailer: ''
        }));
        setAllMovies(formatted);
      });
  }, []);

  const addMovie = (movie) => {
    setAllMovies(prev => [...prev, { ...movie, id: prev.length + 1 }]);
  };

  const filteredMovies = allMovies.filter(
    movie =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="controls">
                    <Filter setFilter={setFilter} />
                    <AddMovie addMovie={addMovie} />
                  </div>
                  <MovieList movies={filteredMovies.slice(0, 20)} />
                </>
              }
            />
            <Route path="/movie/:id" element={<MovieDetail movies={allMovies} />} />
            <Route
              path="/movies"
              element={<MovieList movies={filteredMovies} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
