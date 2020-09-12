import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Button
} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page is under development!
        </p>

        <div className="d-flex justify-content-between">

          <Button
            href="https://github.com/summerysaturn"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my other work on GitHub
          </Button>

          <Button
            className="ml-2 btn-info"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Button>

        </div>

      </header>
    </div>
  );
}

export default App;
