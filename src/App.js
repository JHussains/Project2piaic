import React from 'react';
import logo from './logo192.png;
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pakistan<code>Zindabad</code> By Javed Hussain
        </p>
        <a
          className="App-link"
          href="https://upload.wikimedia.org/wikipedia/commons/d/da/Animated-Flag-Pakistan.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pakistan Flag Link
        </a>
      </header>
    </div>
  );
}

export default App;
