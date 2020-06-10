import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome my Android Application</h2>
      </header>
        <a
          className="App-link"
          href="https://upload.wikimedia.org/wikipedia/commons/d/da/Animated-Flag-Pakistan.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pakistan Flag Link
        </a>
    </div>
  );
}

export default App;
