import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page is under development!
        </p>
        <a
          className="App-link"
          href="https://github.com/summerysaturn"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my other work on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
