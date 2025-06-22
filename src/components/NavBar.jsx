import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
   
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);


  useEffect(() => {
    if (onSearch) onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <nav className="navbar fade-in" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#0a0a0a',
      color: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="nav-left" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" className="nav-logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ffc8', textDecoration: 'none' }}>
          🎬 MovieFlare
        </Link>
        <Link to="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/movies" className="nav-link" style={{ color: '#fff', textDecoration: 'none' }}>Movies</Link>
        <Link to="/about" className="nav-link" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" className="nav-link" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
      </div>
      <div className="nav-right">
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
            className="nav-search-input"
            style={{
              padding: '8px 12px',
              borderRadius: '20px',
              border: 'none',
              background: '#1a1a1a',
              color: '#fff',
              outline: 'none',
              fontSize: '14px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              background: '#00ffc8',
              border: 'none',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Go
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
